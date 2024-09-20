import { createTransport } from "nodemailer";

export const SendMail = async (text, from) => {
  const transporter = createTransport({
    host: process.env.SMPT_HSOT,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_USER,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  await transporter.sendMail({
    subject: "contact request from portfolio",
    // from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    from,
    text,
  });
};
