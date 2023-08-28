const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    // service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMPT_PASS,
    },
  });

  const mailOptions = {
    from: "lucky@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
