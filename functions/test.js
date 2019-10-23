const nodemailer = require("nodemailer");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST",
};

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_EMAIL_USER,
      pass: process.env.GOOGLE_EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.GOOGLE_EMAIL_USER,
    subject: `Povpraševanje: ${name}`,
    text: message,
    html: `<h3>Besedilo:</h3>
              <p>${message}</p>
              <h3>Poslal:</h3>
              <p> ${email}</p>`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Email not sent");
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ msg: "Fail" }),
      };
    } else {
      console.log("Email sent");
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ msg: "Success" }),
      };
    }
  });
};
