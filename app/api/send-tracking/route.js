import { fetchShipmentDetails } from "@/app/_lib/actions";
import { sendEmail } from "@/app/_lib/sendEmail";
import { getFirstName } from "@/app/_utils/helpers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { reference } = await req.json();
    console.log(reference);

    const shipment = await fetchShipmentDetails(reference);

    if (!shipment) {
      return NextResponse.json({ success: false, error: "Shipment not found" }, { status: 404 });
    }

    const firstName = getFirstName(shipment.receiverName);

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
  <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 40px 20px; text-align: center;">
    <div style="background-color: #3b82f6; width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
      <svg style="width: 30px; height: 30px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>
    </div>
    <h1 style="color: #c4dafc; font-size: 28px; font-weight: 700; margin: 0 0 10px 0; letter-spacing: -0.5px;">Shipment Created Successfully</h1>
    <p style="color: #94a3b8; font-size: 16px; margin: 0;">Your package is now in ${shipment.status}</p>
  </div>

  <div style="padding: 40px 20px;">
    <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
      Hello <strong style="color: #0f172a;">${firstName}</strong>,
    </p>
    
    <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin: 0 0 32px 0;">
      Great news! Your shipment has been created and is ready for tracking. You can now monitor your package's journey using the tracking number below.
    </p>

    <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); border-radius: 16px; padding: 32px 24px; text-align: center; margin: 0 0 32px 0; box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);">
      <p style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 1px;">Your Tracking Number</p>
      <div style="background-color: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.2); border-radius: 12px; padding: 20px; margin: 0 0 16px 0;">
        <p style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" letter-spacing: 2px; font-family: 'Courier New', monospace;">${
          shipment.trackingNumber
        }</p>
      </div>
      <p style="color: #dbeafe; font-size: 13px; margin: 0; line-height: 1.5;">
        Use this number to track your shipment in real-time
      </p>
    </div>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin: 0 0 32px 0;">
      <h2 style="color: #0f172a; font-size: 18px; font-weight: 700; margin: 0 0 20px 0; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;">Shipment Details</h2>
      
      <div style="margin-bottom: 16px;">
        <p style="color: #64748b; font-size: 13px; font-weight: 600; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.5px;">Recipient</p>
        <p style="color: #1e293b; font-size: 15px; font-weight: 600; margin: 0;">${shipment.receiverName}</p>
      </div>

      <div style="margin-bottom: 16px;">
        <p style="color: #64748b; font-size: 13px; font-weight: 600; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.5px;">Final Destination</p>
        <p style="color: #1e293b; font-size: 15px; font-weight: 600; margin: 0;">${shipment.finalDestination}</p>
      </div>

      <div style="margin-bottom: 16px;">
        <p style="color: #64748b; font-size: 13px; font-weight: 600; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.5px;">Freight Type</p>
        <p style="color: #1e293b; font-size: 15px; font-weight: 600; margin: 0; text-transform: capitalize;">${shipment.freight} Freight</p>
      </div>

      <div style="margin-bottom: 0;">
        <p style="color: #64748b; font-size: 13px; font-weight: 600; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.5px;">Status</p>
        <div style="display: inline-block;">
          <span style="background-color: #dbeafe; color: #1e40af; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 20px; text-transform: capitalize;">${
            shipment.status
          }</span>
        </div>
      </div>
    </div>

    <div style="text-align: center; margin: 0 0 32px 0;">
      <a href="https://www.tesla-express-cargo.com/track-shipment" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; font-size: 16px; font-weight: 700; padding: 16px 40px; border-radius: 12px; text-decoration: none; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);">
        Track Your Shipment
      </a>
    </div>

    <div style="background-color: #f1f5f9; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px 20px; margin: 0 0 24px 0;">
      <p style="color: #475569; font-size: 14px; line-height: 1.6; margin: 0;">
        <strong style="color: #1e293b;">Need help?</strong> If you have any questions about your shipment, please don't hesitate to contact our support team.
      </p>
    </div>

    <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin: 0;">
      Thank you for choosing our service!<br/>
      <strong style="color: #1e293b;">Tesla Express Cargo Team</strong>
    </p>
  </div>

  <div style="background-color: #f8fafc; padding: 32px 20px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="color: #94a3b8; font-size: 13px; margin: 0 0 8px 0;">
      © ${new Date().getFullYear()} Tesla Express Cargo Ltd. All rights reserved.
    </p>
    <p style="color: #cbd5e1; font-size: 12px; margin: 0;">
      This is an automated message. Please do not reply to this email.
    </p>
  </div>
</div>
    `;

    await sendEmail({
      to: shipment.receiverEmail,
      subject: "Your Tracking Number is Ready",
      htmlContent,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
