"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();
async function main() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // send mail with defined transport object
  module.exports.ConfirmationCode = (email, ValidationCode) => {
    transporter.sendMail(
      {
        from: process.env.EMAIL,
        to: email,
        subject: "Confirme Your Account..",
        html: `<h1>Confirmation Email</h1>
          <h2>Click the link to Validate your account...</h2>
        <a href=http://localhost:3000/confirm/${ValidationCode}>Click Here!</a>
      `,
      },
      (err, info) => {
        console.log(err);
      }
    );
  };
  module.exports.sendMessage = (email) => {
    console.log(email);
    transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Get timely Updated From your favorite Product..",
      html: `
          <h1>You Will get Notified When we update  Our Products..</h1>
          <p>visit our Website and enjoy our new films <a href=http://localhost:3000/>Click Here</a> if you  want to see our new products</p>


          <h3>MOVIE-SHOP</h3>
      
        `,
    });
  };
}

main().catch(console.error);
