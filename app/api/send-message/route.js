import { sendEmail } from "@/app/_lib/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const htmlContent = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
            background-color:#f4f7fa;
            padding:40px 20px;
            margin:0;
            width:100%;"
>
  <div
    style="max-width:600px;
              margin:0 auto;
              background-color:#ffffff;
              border-radius:12px;
              overflow:hidden;
              box-shadow:0 4px 20px rgba(0,0,0,0.08);"
  >
    <div
      style="background:linear-gradient(135deg,#1e40af 0%,#3b82f6 100%);
                padding:40px 30px;
                text-align:center;"
    >
      <h1
        style="margin:0;
                 color:#ffffff;
                 font-size:24px;
                 font-weight:600;
                 letter-spacing:-0.5px;"
      >
        Tesla Express Cargo
      </h1>
    </div>

    <div style="padding:40px 30px;">
      <div
        style="background-color:#f9fafb;
                  border-left:4px solid #3b82f6;
                  border-radius:4px;
                  padding:20px 24px;
                  margin-bottom:32px;"
      >
        ${message}
      </div>

      <div
        style="background-color:#fef3c7;
                  border:1px solid #fcd34d;
                  border-radius:8px;
                  padding:16px 20px;
                  margin-bottom:32px;"
      >
        <p
          style="margin:0;
                  color:#92400e;
                  font-size:14px;
                  line-height:1.6;"
        >
          <strong>⚠️ Action Required:</strong>
          Please review this message carefully and take any necessary actions as outlined above.
        </p>
      </div>

      <p
        style="margin:0 0 8px 0;
                color:#4b5563;
                font-size:15px;
                line-height:1.6;"
      >
        If you have any questions or concerns, please don't hesitate to contact our support team.
      </p>

      <p
        style="margin:24px 0 0 0;
                color:#4b5563;
                font-size:15px;
                line-height:1.6;"
      >
        Best regards,
        <br />
        <strong style="color:#1f2937;">Tesla Express Cargo Support Team</strong>
      </p>
    </div>

    <div
      style="height:1px;
                background-color:#e5e7eb;
                margin:0 30px;"
    ></div>

    <div
      style="padding:30px;
                text-align:center;
                background-color:#f9fafb;"
    >
      <p
        style="margin:0 0 16px 0;
                color:#9ca3af;
                font-size:12px;
                line-height:1.5;"
      >
        This is an official notification from our administrative team.
      </p>
      <p
        style="margin:0;
                color:#9ca3af;
                font-size:11px;
                line-height:1.5;"
      >
        © 2026 Tesla Express Cargo. All rights reserved.
        <br />
        Please do not reply to this email.
      </p>
    </div>
  </div>

  <div
    style="max-width:600px;
              margin:20px auto 0;
              padding:0 20px;
              text-align:center;"
  >
    <p
      style="margin:0;
              color:#9ca3af;
              font-size:12px;
              line-height:1.5;"
    >
      If you're having trouble viewing this email, please contact support.
    </p>
  </div>
</div>
`;

    await sendEmail({
      to: email,
      subject,
      htmlContent,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
