const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      // can also oAuth from google cloud or a key generated from the gamil
        user: process.env.APP_MAIL,
        pass:process.env.APP_PASSWORD
    },
});


exports.getMail = (req, res) => {

  const userEmail = req.body.userEmail;

  var mailOptions = {
    from: 'vivek.kumarsingh@aiesec.net',
    to: userEmail,
    subject: 'Signed Up Successfully!',
    text: 'Kaam Krr rha h!'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log('Email sent: ' + userEmail);
      res.send(info);
    }
  });
};
