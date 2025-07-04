import { Client } from 'pg';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// const client = new Client({
//   host: "localhost",
//   user: "postgres",
//   password: "mysecretpassword",
//   port: 5432
// });

dotenv.config();

const client = new Client({
  connectionString: "postgresql://pl-db_owner:npg_NV2XtueGrd8y@ep-autumn-brook-a89jk5h4-pooler.eastus2.azure.neon.tech/pl-db?sslmode=require&channel_binding=require"
})

await client.connect();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const departmentEmailMap = {
  MA: process.env.MAN_EMAIL,
  NS: process.env.NETWORK_SECURITY_EMAIL,
  HE: process.env.HARDWARE_EXPERT_EMAIL,
  NG: process.env.NETWORK_GEN_ISSUE_EMAIL,
  AG: process.env.ASSETS_GEN_ISSUE_EMAIL,
  T1: process.env.TEST1_EMAIL,
  T2: process.env.TEST2_EMAIL,
};

app.get('/', (req, res) => {
  client.query('SELECT * FROM queries', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(results.rows);
    res.json(results.rows);
  });
});

app.post('/api/contact', async (req, res) => {
  const { fullName, phoneNo, email, department, message } = req.body;

  if (!fullName || !phoneNo || !email || !message || !department) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const toEmail = departmentEmailMap[department];

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: 'New Contact Form Submission',
      text: `You have a new message from ${fullName} (${email}, ${phoneNo}):\n\n${message}`,
      html: `<p>You have a new message from <strong>${fullName}</strong> (${email}, ${phoneNo}):</p><p>${message}</p>`,
    });

    console.log("Email sent successfully!");
    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
