// Import des modules
const nodemailer = require("nodemailer");

// Configuration nodemailer
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.MAIL_USER || "",
        pass: process.env.MAIL_PASSWORD || "",
    },
});

exports.sendMail = (req, res) => {
    const { from, subject, text } = req.body;
    const mailData = {
        from: from,
        to: "maalsi22@clic-boum-paf.com",
        subject: subject,
        text: text,
        html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
};
