import { addDays, format, isValid, parse } from "date-fns";
import { supabase } from "./supabase";

export async function getUserData(authId) {
  const { data, error } = await supabase.from("admins").select("*").eq("authId", authId).single();

  if (error) {
    return null;
  }

  return data;
}

export async function getAllShipments() {
  const { data, error } = await supabase.from("shipments").select("*");

  if (error) {
    return null;
  }
  return data;
}

export async function getAllRoutes() {
  const { data, error } = await supabase.from("routes").select("*");

  if (error) {
    return null;
  }
  return data;
}

export async function getAllFeedbacks() {
  const { data, error } = await supabase.from("shipmentUpdates").select("*");

  if (error) {
    return null;
  }
  return data;
}

export async function getShipment(trackingNumber) {
  const { data, error } = await supabase.from("shipments").select("*").eq("trackingNumber", trackingNumber).single();

  if (error) {
    return null;
  }

  return data;
}

export async function getAllCompanySettings() {
  const { data, error } = await supabase.from("settings").select("*").eq("id", 1).single();

  if (error) {
    return null;
  }

  return data;
}

export async function getAdminsData() {
  const { data, error } = await supabase.from("admins").select("*");

  if (error) {
    return null;
  }

  return data;
}

export async function fetchShipments(searchQuery, pageNumber, setIsLoading, pageSize) {
  setIsLoading(true);
  try {
    let supabaseQuery = supabase
      .from("shipments")
      .select("*", { count: "exact" })
      .range((pageNumber - 1) * pageSize, pageNumber * pageSize - 1)
      .order("createdAt", { ascending: false });

    if (searchQuery) {
      supabaseQuery = supabaseQuery.or(
        `trackingNumber.ilike.%${searchQuery}%,receiverEmail.ilike.%${searchQuery}%,receiverName.ilike.%${searchQuery}%`
      );
    }

    const { data, count, error } = await supabaseQuery;

    if (error) throw error;

    return { data, count };
  } catch (err) {
  } finally {
    setIsLoading(false);
  }
}

export async function handleLogOut() {
  const confirmLogout = window.confirm("Are you sure you want to logout?");

  if (!confirmLogout) {
    return;
  }

  try {
    const res = await fetch("/api/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) throw new Error("Logout failed");

    window.location.href = "/login";
  } catch (error) {
    alert("There was an error logging out. Please try again.");
  }
}

export async function fetchLocation(placeName) {
  const res = await fetch(`/api/geocode?q=${encodeURIComponent(placeName)}`);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    return null;
  }
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*");

  if (error) {
    return null;
  }
  return data[0];
}

export function formatShipmentDate(dateString) {
  if (!dateString) return "";

  const cleaned = dateString.replace(/\.\d+/, "");

  const safeDate = new Date(cleaned.replace("+00:00", "Z"));

  if (isNaN(safeDate)) return "Invalid Date";

  return format(safeDate, "dd-MM-yyyy");
}

export function getDeliveryDate(createdAt, days) {
  if (!createdAt) return null;

  let createdDate;

  createdDate = parse(createdAt, "dd-MM-yyyy", new Date());

  if (!isValid(createdDate)) {
    createdDate = new Date(createdAt);
  }

  if (!isValid(createdDate)) {
    return null;
  }

  const deliveryDate = addDays(createdDate, days || 0);
  return format(deliveryDate, "dd-MM-yyyy");
}

export async function getLiveChatScript() {
  const settings = await getSettings();
  return settings?.liveChatScript;
}

export async function getShipmentUpdates(trackingNumber) {
  try {
    const { data: shipment, error: shipmentError } = await supabase
      .from("shipments")
      .select("freight, status")
      .eq("trackingNumber", trackingNumber)
      .single();

    if (shipmentError) throw new Error(shipmentError.message);

    const { data: updates, error: updatesError } = await supabase
      .from("shipmentUpdates")
      .select("*")
      .eq("trackingNumber", trackingNumber)
      .order("createdAt", { ascending: true });

    if (updatesError) throw new Error(updatesError.message);

    const mergedUpdates = updates.map((update) => ({
      ...update,
      freight: shipment.freight,
    }));

    return mergedUpdates;
  } catch (err) {
    throw err;
  }
}

export async function uploadShipmentImage(file, oldFilePath = null) {
  try {
    if (!file) throw new Error("No image file provided");

    if (oldFilePath) {
      const { error: deleteError } = await supabase.storage.from("shipmentImages").remove([oldFilePath]);
      if (deleteError) console.warn("Old image deletion failed:", deleteError.message);
    }

    const fileExt = file.name.split(".").pop() || "jpg";
    const fileName = `${Math.random().toString(36).substring(2, 12)}.${fileExt}`;
    const filePath = `shipments/${fileName}`;

    const { error: uploadError } = await supabase.storage.from("shipmentImages").upload(filePath, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: publicData } = supabase.storage.from("shipmentImages").getPublicUrl(filePath);

    return {
      success: true,
      imageUrl: publicData.publicUrl,
      filePath,
    };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function getRoutesByTrackingNumber(trackingNumber) {
  if (!trackingNumber) {
    return null;
  }

  const { data, error } = await supabase.from("routes").select("*").eq("trackingNumber", trackingNumber).order("createdAt", { ascending: true });

  if (error) {
    return null;
  }

  if (!data || data.length === 0) {
    return { error: "No routes found for this tracking number" };
  }

  return data;
}

export async function getAllUsers() {
  const { data, error } = await supabase.from("admins").select("*").order("createdAt", { ascending: false });

  if (error) throw error;

  const filtered = data.filter((user) => user.role !== "user");
  return filtered || [];
}
