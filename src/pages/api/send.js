import nodemailer from 'nodemailer';
import multer from 'multer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, phone, area, propertyType, sellingPrice, PropertyArea, body } = req.body;
    const upload = multer({ dest: 'uploads/' });

const transporter = nodemailer.createTransport({
    host: 'mail.esmrton.com',
    port: 465,
    secure: true, 
    auth: {
      user: 'incoming@qoshan.com',
      pass: 'Qoshan@2020',
    },
  });
  

    try {
      // Send email
      await transporter.sendMail({
        from: email,
        to: 'info@qoshan.com',
        subject: 'آعلن عن عقارك',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nArea: ${area}\nProperty Type: ${propertyType}\nSelling Price: ${sellingPrice} \nProperty Area: ${PropertyArea} \n${body}`,
       attachments : [
        {
          filename: "testing.png",
          path: "https://res.cloudinary.com/dhk7qsnfv/image/upload/v1686130405/1-7_glnwhu_x8w7rg.webp"
        }
       ]
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
