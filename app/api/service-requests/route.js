import { sendEmail } from "@/app/_lib/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { subject, message, visitorEmail, visitorName, visitorPhone } = await req.json();

    const htmlContent = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
  
  <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 40px 20px; text-align: center; position: relative;">
    <div style="background-color: #3b82f6; width: 70px; height: 70px; border-radius: 50%; margin: 0 auto 20px; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);">
      <svg style="width: 36px; height: 36px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
      </svg>
    </div>
    <h1 style="color: #ffffff; font-size: 26px; font-weight: 700; margin: 0 0 8px 0; letter-spacing: -0.5px;">Tesla Express Cargo</h1>
    <p style="color: #94a3b8; font-size: 15px; margin: 0; font-weight: 500;">New Service Request Received</p>
  </div>

  <div style="padding: 40px 24px;">
    <p style="color: #0f172a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
      Hello Support Team,
    </p>
    
    <p style="color: #64748b; font-size: 15px; line-height: 1.7; margin: 0 0 32px 0;">
      A new service request has been submitted via the contact form. Please review the details below and respond promptly.
    </p>

    <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); border-radius: 12px; padding: 16px 20px; margin: 0 0 28px 0; text-align: center;">
      <p style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 1px;">
        🔔 Action Required
      </p>
    </div>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; margin: 0 0 28px 0;">
      <h2 style="color: #0f172a; font-size: 18px; font-weight: 700; margin: 0 0 20px 0; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;">Request Details</h2>
      
      <div style="margin-bottom: 16px; padding: 12px; background-color: #ffffff; border-radius: 8px;">
        <p style="color: #64748b; font-size: 12px; font-weight: 700; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 0.8px;">Full Name</p>
        <p style="color: #1e293b; font-size: 15px; font-weight: 600; margin: 0; word-break: break-word;">${visitorName}</p>
      </div>

      <div style="margin-bottom: 16px; padding: 12px; background-color: #ffffff; border-radius: 8px;">
        <p style="color: #64748b; font-size: 12px; font-weight: 700; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 0.8px;">Email Address</p>
        <p style="color: #3b82f6; font-size: 15px; font-weight: 600; margin: 0; word-break: break-word;">
          <a href="mailto:${visitorEmail}" style="color: #3b82f6; text-decoration: none;">${visitorEmail}</a>
        </p>
      </div>

      <div style="margin-bottom: 16px; padding: 12px; background-color: #ffffff; border-radius: 8px;">
        <p style="color: #64748b; font-size: 12px; font-weight: 700; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 0.8px;">Phone Number</p>
        <p style="color: #1e293b; font-size: 15px; font-weight: 600; margin: 0; word-break: break-word;">
          <a href="tel:${visitorPhone}" style="color: #1e293b; text-decoration: none;">${visitorPhone}</a>
        </p>
      </div>

      <div style="margin-bottom: 16px; padding: 12px; background-color: #ffffff; border-radius: 8px;">
        <p style="color: #64748b; font-size: 12px; font-weight: 700; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 0.8px;">Subject</p>
        <p style="color: #1e293b; font-size: 15px; font-weight: 600; margin: 0; word-break: break-word;">${subject}</p>
      </div>

      <div style="margin-bottom: 0; padding: 16px; background-color: #ffffff; border-radius: 8px; border-left: 4px solid #3b82f6;">
        <p style="color: #64748b; font-size: 12px; font-weight: 700; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.8px;">Message</p>
        <p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.7; word-break: break-word; white-space: pre-wrap;">${message}</p>
      </div>
    </div>

    <div style="text-align: center; margin: 0 0 28px 0;">
      <a href="mailto:${visitorEmail}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; font-size: 15px; font-weight: 700; padding: 14px 32px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4); text-transform: uppercase; letter-spacing: 0.5px;">
        Reply to Customer
      </a>
    </div>

    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid #f59e0b; border-radius: 10px; padding: 16px 20px; margin: 0 0 24px 0;">
      <p style="color: #92400e; font-size: 14px; line-height: 1.6; margin: 0;">
        <strong style="font-weight: 700;">⚡ Quick Response Required:</strong> Please respond to this inquiry within 24 hours to maintain excellent customer service.
      </p>
    </div>

    <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin: 0;">
      Best regards,<br/>
      <strong style="color: #1e293b; font-weight: 700;">Tesla Express Cargo System</strong>
    </p>
  </div>

  <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 28px 24px; text-align: center; border-top: 1px solid #e2e8f0;">
    <div style="margin-bottom: 12px;">
      <p style="color: #1e293b; font-size: 14px; font-weight: 700; margin: 0 0 4px 0;">Tesla Express Cargo</p>
      <p style="color: #64748b; font-size: 13px; margin: 0;">Professional Logistics & Freight Services</p>
    </div>
    <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 12px;">
      <p style="color: #94a3b8; font-size: 12px; margin: 0 0 4px 0;">
        © 2026 Tesla Express Cargo. All rights reserved.
      </p>
      <p style="color: #cbd5e1; font-size: 11px; margin: 0; line-height: 1.5;">
        This is an automated notification. Please do not reply to this email.
      </p>
    </div>
  </div>
</div>`;

    await sendEmail({
      to: "teslaexpresscargo@gmail.com",
      subject,
      htmlContent,
    });

    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
