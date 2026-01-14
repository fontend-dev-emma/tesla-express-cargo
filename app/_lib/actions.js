"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { supabase } from "./supabase";

export async function getUser() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("sb-access-token")?.value;
  const refreshToken = cookieStore.get("sb-refresh-token")?.value;
  const isImpersonating = cookieStore.get("impersonating")?.value === "true";

  if (!refreshToken) return null;

  try {
    if (isImpersonating && accessToken) {
      const decoded = jwt.verify(accessToken, process.env.SUPABASE_JWT_SECRET);
      return {
        id: decoded.sub,
        role: decoded.user_metadata?.role,
        email: decoded.email,
        name: decoded.user_metadata?.name,
      };
    } else if (isImpersonating) {
      return null;
    }

    if (!accessToken) {
      const { data, error } = await supabase.auth.refreshSession(refreshToken);
      if (error || !data.session) return null;

      return data.session.user;
    }

    const { data } = await supabase.auth.getUser(accessToken);
    return data.user;
  } catch (err) {
    return null;
  }
}

export async function createShipment(shipmentData) {
  const {
    senderName,
    status,
    finalDestination,
    receiverName,
    receiverEmail,
    receiverPhone,
    fromLocation,
    toLocation,
    currentLocation,
    weight,
    shipmentCost,
    imageUrl,
    filePath,
    freight,
    estimatedDays,
  } = shipmentData;

  function generateReference() {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `REF-${date}-${random}`;
  }

  function generateTrackingNumber() {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const random = Math.floor(100000 + Math.random() * 900000);
    return `TEC-${date}-${random}`;
  }

  const newShipment = {
    senderName,
    status,
    finalDestination,
    currentLocation,
    weight,
    shipmentCost,
    receiverName,
    receiverEmail,
    receiverPhone,
    fromLocation,
    toLocation,
    imageUrl,
    filePath,
    freight,
    estimatedDays,
    trackingNumber: generateTrackingNumber(),
    reference: generateReference(),
  };

  const { data, error } = await supabase.from("shipments").insert([newShipment]).select();

  if (error) throw new Error(error.message);

  return { success: true, data };
}

export async function updateShipmentLocation(trackingNumber, newLocation) {
  if (!trackingNumber || !newLocation) {
    return { error: "Shipment tracking number required" };
  }

  const { data, error } = await supabase.from("shipments").update({ currentLocation: newLocation }).eq("trackingNumber", trackingNumber);

  if (error) {
    return { error: "Failed to update shipment current location!" };
  }

  return { success: true };
}

export async function updateShipmentStatus(trackingNumber, newStatus) {
  if (!trackingNumber || !newStatus) {
    return { error: "Shipment tracking number required" };
  }

  const { data, error } = await supabase.from("shipments").update({ status: newStatus }).eq("trackingNumber", trackingNumber);

  if (error) {
    return { error: "Failed to update shipment status!" };
  }

  return { success: true };
}

export async function updateAdminPassword(email, hashedPassword) {
  const { data, error } = await supabase.from("admins").update({ password: hashedPassword }).eq("email", email).select();

  if (error) {
    return null;
  }

  return { success: true, data };
}

export async function hashAndUpdateAdminPassword(email, password) {
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const { data, error } = await supabase.from("admins").update({ password: hashedPassword }).eq("email", email).select();

  if (error) throw new Error(error.message);

  return { success: true, data };
}

export async function updateSettings({ companyEmail, companyPhone, liveChatScript }) {
  const updates = {};
  if (companyEmail) updates.companyEmail = companyEmail;
  if (companyPhone) updates.companyPhone = companyPhone;
  if (liveChatScript) updates.liveChatScript = liveChatScript;

  if (Object.keys(updates).length === 0) {
    return null;
  }

  const { error, data } = await supabase.from("settings").update(updates).eq("id", 1).select();

  if (error) throw new Error(error.message);

  return { success: true, data };
}

export async function createServiceRequest(formData) {
  const { data, error } = await supabase.from("serviceRequests").insert([formData]).select();

  if (error) throw new Error("Request Failed ❌");

  return { success: true, data };
}

export async function updateShipmentDetails(updateFields) {
  try {
    if (!updateFields.trackingNumber) throw new Error("Tracking number is required");

    const updates = {};

    if (updateFields.freight) updates.freight = updateFields.freight;
    if (updateFields.senderName) updates.senderName = updateFields.senderName;
    if (updateFields.receiverName) updates.receiverName = updateFields.receiverName;
    if (updateFields.receiverEmail) updates.receiverEmail = updateFields.receiverEmail;
    if (updateFields.receiverPhone) updates.receiverPhone = updateFields.receiverPhone;
    if (updateFields.fromLocation) updates.fromLocation = updateFields.fromLocation;
    if (updateFields.toLocation) updates.toLocation = updateFields.toLocation;
    if (updateFields.finalDestination) updates.finalDestination = updateFields.finalDestination;
    if (updateFields.estimatedDays) updates.estimatedDays = updateFields.estimatedDays;
    if (updateFields.shipmentCost) updates.shipmentCost = updateFields.shipmentCost;
    if (updateFields.weight) updates.weight = updateFields.weight;
    if (updateFields.imageUrl) updates.imageUrl = updateFields.imageUrl;
    if (updateFields.filePath) updates.filePath = updateFields.filePath;

    if (Object.keys(updates).length === 0) {
      return { success: false, message: "No update performed" };
    }

    const { error } = await supabase.from("shipments").update(updates).eq("trackingNumber", updateFields.trackingNumber);

    if (error) throw new Error(error.message);

    return {
      success: true,
      message: "Shipment updated successfully",
      updatedFields: updates,
    };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function createFeedback(feedbackData) {
  const newFeedback = {
    ...feedbackData,
  };

  const { data, error } = await supabase.from("shipmentUpdates").insert([newFeedback]).select();

  if (error) throw new Error(error.message);

  return { success: true, data };
}

export async function addAdminRole(userId) {
  const { data: userData, error: getError } = await supabase.auth.admin.getUserById(userId);

  if (getError) {
    return { success: false, error: getError.message };
  }

  const existingMeta = userData.user.user_metadata || {};

  const { data, error } = await supabase.auth.admin.updateUserById(userId, {
    user_metadata: {
      ...existingMeta,
      role: "admin",
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, user: data.user };
}

export async function createNewRoute(newRoute) {
  const { data, error } = await supabase.from("routes").insert([newRoute]).select("*");

  if (error) {
    return null;
  }

  return data[0];
}

export async function resetUserPassword({ authId, oldPassword, newPassword }) {
  const saltRounds = 10;

  const { data: user, error } = await supabase.from("admins").select("password").eq("authId", authId).single();

  if (error) {
    return { error: "User not found" };
  }

  const match = await bcrypt.compare(oldPassword + process.env.PEPPER, user.password);

  if (!match) return { error: "Old password is incorrect" };

  const { error: authErr } = await supabase.auth.admin.updateUserById(authId, {
    password: newPassword,
  });

  if (authErr) {
    return { error: "Could not update password" };
  }

  const hashedNewPassword = await bcrypt.hash(newPassword + (process.env.PEPPER || ""), saltRounds);

  const { error: updateErr } = await supabase.from("admins").update({ password: hashedNewPassword }).eq("authId", authId).select();

  if (updateErr) throw new Error(updateErr.message);

  return { success: true };
}

export async function sendTokenForForgotPassword(email) {
  const token = Math.floor(100000 + Math.random() * 900000).toString();

  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  const { data, error } = await supabase
    .from("admins")
    .update({
      token: token,
      tokenExpiresAt: expiresAt,
    })
    .eq("email", email)
    .select("*")
    .single();

  if (error) throw new Error("Failed to generate token");

  return { success: true, data };
}

export async function verifyTokenForForgotPassword(email, token) {
  const { data: user, error } = await supabase.from("admins").select("token, tokenExpiresAt").eq("email", email).single();

  const validToken = user.token;

  if (error || !user) {
    return { success: false, error: "User not found" };
  }

  if (!validToken || !user.tokenExpiresAt) {
    return { success: false, error: "No active token" };
  }

  if (validToken !== token) {
    return { success: false, error: "Invalid token" };
  }

  if (new Date(user.tokenExpiresAt) < new Date()) {
    return { success: false, error: "Token expired" };
  }

  await supabase.from("admins").update({ token: null, tokenExpiresAt: null }).eq("email", email);

  return { success: true };
}

export async function resetUserPasswordForForgotPassword({ email, newPassword }) {
  const saltRounds = 10;

  try {
    const { data: user, error } = await supabase.from("admins").select("password, authId").eq("email", email).single();

    if (error || !user) {
      return { error: "User not found" };
    }

    const authId = user.authId;

    const { error: authErr } = await supabase.auth.admin.updateUserById(authId, {
      password: newPassword,
    });

    if (authErr) {
      return { error: "Could not reset password" };
    }

    const hashedNewPassword = await bcrypt.hash(newPassword + (process.env.PEPPER || ""), saltRounds);

    const { error: updateErr } = await supabase.from("admins").update({ password: hashedNewPassword }).eq("authId", authId);

    if (updateErr) {
      return { error: updateErr.message };
    }

    return { success: true };
  } catch (err) {
    return { error: "An unexpected error occurred" };
  }
}
