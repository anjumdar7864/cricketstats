const nodemailer = require('nodemailer');

function sendResetPassEmail(pin, user) {

    const output = `Hi <strong>${user.name}!</strong><br> Here is Your Reset Password Code <strong>${pin}</strong> Which is only valid for 2 hours `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'imap.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'alifdeenofficial@gmail.com', // generated ethereal user
            pass: 'alifdeen.123'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"eChliniques" <alifdeenofficial@gmail.com>', // sender address
        to: [user.email], // list of receivers
        subject: 'eChliniques Support', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

}

module.exports.sendResetPassEmail = sendResetPassEmail;


