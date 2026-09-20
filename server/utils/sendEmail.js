import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, html }) => {
  const requiredEmailConfig = ["EMAIL_HOST", "EMAIL_PORT", "EMAIL_USER", "EMAIL_PASS", "EMAIL_FROM"];
  const missingConfig = requiredEmailConfig.filter((key) => !process.env[key]);

  if (missingConfig.length) {
    throw new Error(`Missing email configuration: ${missingConfig.join(", ")}`);
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html,
  });
};

export default sendEmail;
