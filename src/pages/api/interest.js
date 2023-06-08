import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, phone, propertyName, body } = req.body;

    // Create a nodemailer transporter
    // Create a nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'mail.esmrton.com',
    port: 465,
    secure: true, // Set it to true if your server requires a secure connection (e.g., port 465 with SSL)
    auth: {
      user: 'interest@qoshan.com',
      pass: 'Qoshan@2020',
    },
  });
  

    try {
      // Send email
      await transporter.sendMail({
        from: email,
        to: 'info@qoshan.com',
        subject: 'إهتمام عقار',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProperty: ${propertyName}\n${body}`,
      });

      res.status(200).json({ message: 'تم ارسال الرسالة بنجاح' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
