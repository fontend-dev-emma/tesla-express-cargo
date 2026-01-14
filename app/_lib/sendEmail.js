import SibApiV3Sdk from "@sendinblue/client";

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

emailApi.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

export async function sendEmail({ to, subject, htmlContent }) {
  const email = new SibApiV3Sdk.SendSmtpEmail();
  email.sender = {
    email: process.env.SENDER_EMAIL,
    name: process.env.SENDER_NAME,
  };
  email.to = [{ email: to }];
  email.subject = subject;
  email.htmlContent = htmlContent;

  try {
    const response = await emailApi.sendTransacEmail(email);
    return response;
  } catch (err) {
    throw err;
  }
}
