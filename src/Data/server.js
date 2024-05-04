const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3001; 

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'littlewoodglobal@gmail.com',
            pass: 'your-email-password',
        },
    });
    const mailOptions = {
        from: 'littlewoodglobal@gmail.com',
        to: 'obikennedy05@gmail.com', 
        subject: 'New Contact Form Submission',
        text: `
            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Phone Number: ${phoneNumber}
            Message: ${message}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
