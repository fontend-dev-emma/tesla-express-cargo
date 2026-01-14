import { getUserData } from "@/app/_lib/data-service";
import { sendEmail } from "@/app/_lib/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { authId } = await req.json();

    const user = await getUserData(authId);

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fa; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);">

    <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 40px 30px; text-align: center; color: #ffffff;">
      <div style="font-size: 32px; font-weight: 700; margin-bottom: 8px; letter-spacing: -0.5px;">Tesla Express Cargo</div>
      <p style="font-size: 14px; opacity: 0.95; font-weight: 400; margin: 0;">Secure Logistics Platform</p>
    </div>

    <div style="padding: 45px 35px; color: #333333;">
      <p style="font-size: 16px; margin-bottom: 25px; color: #1f2937;">Hello ,</p>

      <div style="font-size: 15px; line-height: 1.7; color: #4b5563; margin-bottom: 35px;">
        <p style="margin: 0;">
          Use the verification code below to authorize your requested action. The code is valid for a limited time and for one-time use only.
        </p>
      </div>

      <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border: 2px solid #3b82f6; border-radius: 12px; padding: 30px; text-align: center; margin: 35px 0;">
        <div style="font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; font-weight: 600;">Your Verification Code</div>
        <div style="font-size: 36px; font-weight: 700; color: #1e40af; letter-spacing: 8px; font-family: 'Courier New', monospace; margin: 10px 0;">${user.token}</div>
        <div style="font-size: 13px; color: #ef4444; margin-top: 15px; font-weight: 500;">⏱ Expires in 5 minutes</div>
      </div>

      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0; border-radius: 6px;">
        <p style="font-size: 14px; color: #92400e; margin: 0;"><strong>Important:</strong> This code is valid for a single use only. Please enter it on the verification page to continue.</p>
      </div>

      <div style="background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 20px; margin: 25px 0; border-radius: 6px;">
        <p style="font-size: 14px; color: #7f1d1d; margin: 0;"><strong>Security Notice:</strong> If you did not request this code, please ignore this email and consider changing your password immediately. Never share this code with anyone.</p>
      </div>

      <div style="font-size: 15px; color: #1f2937; margin-top: 35px;">
        Best regards, <br>
        <strong style="color: #1e40af; font-weight: 600;">The Tesla Express Cargo Security Team</strong>
      </div>
    </div>

    <div style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
      <div style="font-size: 20px; font-weight: 700; color: #1e40af; margin-bottom: 15px;">Tesla Express Cargo</div>
      <p style="font-size: 13px; color: #6b7280; margin: 8px 0;">&copy; 2025 Tesla Express Cargo. All rights reserved.</p>
      <p style="font-size: 13px; color: #6b7280; margin: 8px 0;">This is an automated security message. Please do not reply to this email.</p>
      <p style="font-size: 13px; color: #6b7280; margin: 8px 0; margin-top: 15px;">
        <a href="https://tesla-express-cargo/contact" style="color: #3b82f6; text-decoration: none;">Help Center</a> |
        <a href="https://tesla-express-cargo/contact" style="color: #3b82f6; text-decoration: none;">Contact Support</a> |
        <a href="https://tesla-express-cargo/about-us" style="color: #3b82f6; text-decoration: none;">Privacy Policy</a>
      </p>
    </div>

  </div>
</div>
    `;

    await sendEmail({
      to: user.email,
      subject: "Tesla Express Cargo Verification Code",
      htmlContent,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
