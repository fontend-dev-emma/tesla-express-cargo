import { sendEmail } from "@/app/_lib/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { subject, message, visitorEmail, visitorName, visitorPhone } = await req.json();
    const to = "velentralogistics@gmail.com";

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  
  <div style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); padding:30px 20px; text-align:center;">
    <img src="https://tesla-express-cargo.com/tesla-express-cargo-logo.jpg" 
         alt="Tesla express cargo Logo" 
         style="max-height:60px; margin-bottom:15px;" />
    <h2 style="margin:10px 0 5px 0; color:#ffffff; font-size:24px; font-weight:600; letter-spacing:0.5px;">Tesla Express Cargo</h2>
    <p style="margin:0; font-size:14px; color:rgba(255,255,255,0.9);">New Service Request Notification</p>
  </div>

  <div style="padding:30px 25px; color:#333;">
    <p style="font-size:15px; line-height:1.6; margin-bottom:20px; color:#1f2937;">
      Hello Support Team,
    </p>

    <p style="font-size:14px; line-height:1.6; margin-bottom:25px; color:#4b5563;">
      A new service request has been submitted via the Tesla Express Cargo contact form. Details are as follows:
    </p>

    <div style="background:#f9fafb; border-radius:8px; padding:20px; margin-bottom:25px;">
      
      <div style="display:flex; padding:12px 0; border-bottom:1px solid #e5e7eb;">
        <div style="width:35%; min-width:120px; font-weight:600; color:#374151; font-size:14px;">Name:</div>
        <div style="width:65%; color:#1f2937; font-size:14px; word-break:break-word;">${visitorName}</div>
      </div>

      <div style="display:flex; padding:12px 0; border-bottom:1px solid #e5e7eb;">
        <div style="width:35%; min-width:120px; font-weight:600; color:#374151; font-size:14px;">Email:</div>
        <div style="width:65%; color:#1f2937; font-size:14px; word-break:break-word;">${visitorEmail}</div>
      </div>

      <div style="display:flex; padding:12px 0; border-bottom:1px solid #e5e7eb;">
        <div style="width:35%; min-width:120px; font-weight:600; color:#374151; font-size:14px;">Phone:</div>
        <div style="width:65%; color:#1f2937; font-size:14px; word-break:break-word;">${visitorPhone}</div>
      </div>

      <div style="display:flex; padding:12px 0; border-bottom:1px solid #e5e7eb;">
        <div style="width:35%; min-width:120px; font-weight:600; color:#374151; font-size:14px;">Subject:</div>
        <div style="width:65%; color:#1f2937; font-size:14px; word-break:break-word;">${subject}</div>
      </div>

      <div style="display:flex; padding:12px 0;">
        <div style="width:35%; min-width:120px; font-weight:600; color:#374151; font-size:14px;">Message:</div>
        <div style="width:65%; color:#1f2937; font-size:14px; word-break:break-word; line-height:1.6;">${message}</div>
      </div>

    </div>

    <p style="font-size:14px; line-height:1.6; color:#4b5563; margin-bottom:8px;">
      Please follow up promptly.
    </p>

    <p style="font-size:14px; line-height:1.6; color:#1f2937;">
      Best regards, <br/>
      <strong style="color:#14b8a6;">Tesla Express Cargo System</strong>
    </p>
  </div>

  <div style="text-align:center; padding:20px; background:#f9fafb; font-size:12px; color:#6b7280;">
    <p style="margin:0; font-weight:600; color:#374151;">Tesla Express Cargo © 2025</p>
    <p style="margin-top:8px; line-height:1.5;">This notification was generated automatically from the Tesla Express Cargo contact form.</p>
  </div>

</div>
    `;

    await sendEmail({
      to,
      subject,
      htmlContent,
    });

    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
