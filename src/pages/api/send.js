import nodemailer from 'nodemailer';
import multer from 'multer';
import express from 'express';


const app = express();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, phone, area, propertyType, sellingPrice, PropertyArea, body, propertyImages } = req.body;
    const upload = multer({ storage: multer.memoryStorage() });
 
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
      app.post('/upload', upload.single('propertyImages'), (req, res) => {
        transporter.sendMail({
          from: "incoming@qoshan.com",
          to: "info@qoshan.com",
          subject: 'آعلن عن عقارك',
          html: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nArea: ${area}\nProperty Type: ${propertyType}\nSelling Price: ${sellingPrice} \nProperty Area: ${PropertyArea} \n${body}`,
          attachments: [{
            filename: req.file.propertyImages,
            content: req.file.buffer
          }]
        })
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
