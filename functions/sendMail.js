require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const { SENDGRID_API_KEY, DESTINATION_EMAIL } = process.env;

// Initializing SendGrid service and API
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(SENDGRID_API_KEY);

// Assigning headers
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST",
};

exports.handler = (event, context, callback) => {
  const { name, email, message } = JSON.parse(event.body);

  // Defining email content
  const mail = {
    from: email,
    to: DESTINATION_EMAIL,
    subject: `Povpraševanje: ${name}`,
    text: message,
    html: `<h3>Besedilo:</h3>
    <p>${message}</p>
    <h3>Poslal:</h3>
    <p> ${email}</p>`,
  };

  // Sending email
  sgMail
    .send(mail)
    .then(() => {
      console.log(`***SUCCESS*** -- Sender: ${name}, Address: ${email} -- `);

      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({ msg: "Email sent" }),
      });
    })
    .catch(error => {
      console.log(error);
      callback(null, {
        statusCode: 503,
        headers,
        body: JSON.stringify({ msg: "Email Failed" }),
      });
    });
};
