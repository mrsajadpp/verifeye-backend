var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const cron = require('node-cron');

// Define MongoDB schema
const userSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  tel: String,
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: "thintry.no@gmail.com",
    pass: "smzi jupm ojhj nnpb",
  },
});

const User = mongoose.model('User', userSchema);

// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
// 8B66mWtTcsgEm55f
mongoose.connect('mongodb+srv://sajadpp:8B66mWtTcsgEm55f@verifeye.sfs5rd8.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

/* GET home page. */
router.post('/waitlist/register', async function (req, res, next) {
  try {
    if (req.body.full_name && req.body.email) {

      // Check if the user with the provided email already exists
      const existingUser = await User.findOne({ email: req.body.email });

      if (existingUser) {
        // User with the provided email already exists, update the data
        existingUser.full_name = req.body.full_name;
        existingUser.tel = req.body.tel ? req.body.tel : null;
        await existingUser.save();

        // Send an email
        await transporter.sendMail({
          from: '"Thintry" <thintry.no@gmail.com>',
          to: req.body.email,
          subject: 'Welcome to Verifeye!',
          text: `Hello ${req.body.full_name},\nThank you for joining Verifeye's waitlist!`,
          html: `<body style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff">
          <table border="0" cellspacing="0" cellpadding="0" align="center" id="m_-7626415423304311386email_table"
              style="border-collapse:collapse">
              <tbody>
                  <tr>
                      <td id="m_-7626415423304311386email_content"
                          style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff">
                          <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                              <tbody>
                                  <tr>
                                      <td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
                                  </tr>
                                  <tr>
                                      <td height="1" colspan="3" style="line-height:1px"></td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <table border="0" width="100%" cellspacing="0" cellpadding="0"
                                              style="border-collapse:collapse;text-align:center;width:100%">
                                              <tbody>
                                                  <tr>
                                                      <td width="15px" style="width:15px"></td>
                                                      <td style="line-height:0px;max-width:600px;padding:0 0 15px 0">
                                                          <table border="0" width="100%" cellspacing="0" cellpadding="0"
                                                              style="border-collapse:collapse">
                                                              <tbody>
                                                                  <td height="10" style="line-height:10px" colspan="1">
                                                                      &nbsp;</td>
                                                                      <td height="10" style="line-height:10px" colspan="1">
                                                                          &nbsp;</td>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                      <td width="15px" style="width:15px"></td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <table border="0" width="430" cellspacing="0" cellpadding="0"
                                              style="border-collapse:collapse;margin:0 auto 0 auto">
                                              <tbody>
                                                  <tr>
                                                      <td>
                                                          <table border="0" width="430px" cellspacing="0" cellpadding="0"
                                                              style="border-collapse:collapse;margin:0 auto 0 auto;width:430px">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="15" style="display:block;width:15px">
                                                                          &nbsp;&nbsp;&nbsp;</td>
                                                                  </tr>
                                                                  <tr>
                                                                      <td>
                                                                          <table border="0" width="100%" cellspacing="0"
                                                                              cellpadding="0"
                                                                              style="border-collapse:collapse">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td>
                                                                                          <table border="0" cellspacing="0"
                                                                                              cellpadding="0"
                                                                                              style="border-collapse:collapse">
                                                                                              <tbody>
                                                                                                  <tr>
                                                                                                      <td width="20"
                                                                                                          style="display:block;width:20px">
                                                                                                          &nbsp;&nbsp;&nbsp;
                                                                                                      </td>
                                                                                                      <td>
                                                                                                          <table border="0"
                                                                                                              cellspacing="0"
                                                                                                              cellpadding="0"
                                                                                                              style="border-collapse:collapse">
                                                                                                              <tbody>
                                                                                                                  <tr>
                                                                                                                      <td>
                                                                                                                          <p
                                                                                                                              style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                                                                                                                              Hello
                                                                                                                              ${req.body.full_name}!
                                                                                                                          </p>
                                                                                                                          <p
                                                                                                                              style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                                                                                                                              Thank
                                                                                                                              you
                                                                                                                              for
                                                                                                                              joining
                                                                                                                              the
                                                                                                                              Verifeye
                                                                                                                              waitlist.
                                                                                                                              🚀
                                                                                                                              You're
                                                                                                                              now
                                                                                                                              part
                                                                                                                              of
                                                                                                                              an
                                                                                                                              exciting
                                                                                                                              community
                                                                                                                              anticipating
                                                                                                                              updates
                                                                                                                              and
                                                                                                                              news
                                                                                                                              about
                                                                                                                              Verifeye.
      
                                                                                                                              Rest
                                                                                                                              assured,
                                                                                                                              we'll
                                                                                                                              keep
                                                                                                                              you
                                                                                                                              informed
                                                                                                                              about
                                                                                                                              any
                                                                                                                              developments
                                                                                                                              or
                                                                                                                              exciting
                                                                                                                              news
                                                                                                                              via
                                                                                                                              email
                                                                                                                              or
                                                                                                                              your
                                                                                                                              provided
                                                                                                                              phone
                                                                                                                              number.
                                                                                                                              Stay
                                                                                                                              tuned
                                                                                                                              for
                                                                                                                              exclusive
                                                                                                                              updates!
      
                                                                                                                              Have
                                                                                                                              a
                                                                                                                              fantastic
                                                                                                                              day!
                                                                                                                          </p>
                                                                                                                      </td>
                                                                                                                  </tr>
                                                                                                                  <tr>
                                                                                                                      <td height="20"
                                                                                                                          style="line-height:20px">
                                                                                                                          &nbsp;
                                                                                                                      </td>
                                                                                                                  </tr>
                                                                                                              </tbody>
                                                                                                          </table>
                                                                                                      </td>
                                                                                                  </tr>
                                                                                              </tbody>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                                  <tr>
                                                                      <td height="10" style="line-height:10px" colspan="1">
                                                                          &nbsp;</td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <table border="0" cellspacing="0" cellpadding="0"
                                              style="border-collapse:collapse;margin:0 auto 0 auto;width:100%;max-width:600px">
                                              <tbody>
                                                  <tr>
                                                      <td height="4" style="line-height:4px" colspan="3">&nbsp;</td>
                                                  </tr>
                                                  <tr>
                                                      <td width="15px" style="width:15px"></td>
                                                      <td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td>
                                                      <td style="text-align:center">
                                                          <div style="padding-top:10px;display:flex">
                                                              <div style="margin:auto"><img
                                                                      src="https://i.postimg.cc/NjJ4pz9L/verifeye.png"
                                                                      height="56" alt="" class="CToWUd"
                                                                      data-bit="iit"></div><br><br>
                                                          </div>
                                                          <div style="height:10px"></div>
                                                          <div style="color:#abadae;font-size:11px;margin:0 auto 5px auto">©
                                                              Verifeye. a Thintry Platform. Kondotty, Malappuram, Kerala.<br></div>
                                                      </td>
                                                      <td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td>
                                                      <td width="15px" style="width:15px"></td>
                                                  </tr>
                                                  <tr>
                                                      <td height="32" style="line-height:32px" colspan="3">&nbsp;</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
                                  </tr>
                              </tbody>
                          </table><span><img
                                  src="https://i.postimg.cc/NjJ4pz9L/verifeye.png"
                                  style="border:0;width:1px;height:1px" class="CToWUd" data-bit="iit"></span>
                      </td>
                  </tr>
              </tbody>
          </table>
      </body>`,
        });

        res.redirect('https://verifeye.thintry.com/waitlisted.html');
      } else {
        // User doesn't exist, save user data to MongoDB
        const newUser = new User({
          full_name: req.body.full_name,
          email: req.body.email,
          tel: req.body.tel ? req.body.tel : null,
        });
        await newUser.save();

        // Send an email
        await transporter.sendMail({
          from: '"Thintry" <thintry.no@gmail.com>',
          to: req.body.email,
          subject: 'Welcome to Verifeye!',
          text: `Hello ${req.body.full_name},\nThank you for joining Verifeye's waitlist!`,
          html: `<body style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff">
          <table border="0" cellspacing="0" cellpadding="0" align="center" id="m_-7626415423304311386email_table"
              style="border-collapse:collapse">
              <tbody>
                  <tr>
                      <td id="m_-7626415423304311386email_content"
                          style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff">
                          <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                              <tbody>
                                  <tr>
                                      <td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
                                  </tr>
                                  <tr>
                                      <td height="1" colspan="3" style="line-height:1px"></td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <table border="0" width="100%" cellspacing="0" cellpadding="0"
                                              style="border-collapse:collapse;text-align:center;width:100%">
                                              <tbody>
                                                  <tr>
                                                      <td width="15px" style="width:15px"></td>
                                                      <td style="line-height:0px;max-width:600px;padding:0 0 15px 0">
                                                          <table border="0" width="100%" cellspacing="0" cellpadding="0"
                                                              style="border-collapse:collapse">
                                                              <tbody>
                                                                  <td height="10" style="line-height:10px" colspan="1">
                                                                      &nbsp;</td>
                                                                      <td height="10" style="line-height:10px" colspan="1">
                                                                          &nbsp;</td>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                      <td width="15px" style="width:15px"></td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <table border="0" width="430" cellspacing="0" cellpadding="0"
                                              style="border-collapse:collapse;margin:0 auto 0 auto">
                                              <tbody>
                                                  <tr>
                                                      <td>
                                                          <table border="0" width="430px" cellspacing="0" cellpadding="0"
                                                              style="border-collapse:collapse;margin:0 auto 0 auto;width:430px">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="15" style="display:block;width:15px">
                                                                          &nbsp;&nbsp;&nbsp;</td>
                                                                  </tr>
                                                                  <tr>
                                                                      <td>
                                                                          <table border="0" width="100%" cellspacing="0"
                                                                              cellpadding="0"
                                                                              style="border-collapse:collapse">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td>
                                                                                          <table border="0" cellspacing="0"
                                                                                              cellpadding="0"
                                                                                              style="border-collapse:collapse">
                                                                                              <tbody>
                                                                                                  <tr>
                                                                                                      <td width="20"
                                                                                                          style="display:block;width:20px">
                                                                                                          &nbsp;&nbsp;&nbsp;
                                                                                                      </td>
                                                                                                      <td>
                                                                                                          <table border="0"
                                                                                                              cellspacing="0"
                                                                                                              cellpadding="0"
                                                                                                              style="border-collapse:collapse">
                                                                                                              <tbody>
                                                                                                                  <tr>
                                                                                                                      <td>
                                                                                                                          <p
                                                                                                                              style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                                                                                                                              Hello
                                                                                                                              ${req.body.full_name}!
                                                                                                                          </p>
                                                                                                                          <p
                                                                                                                              style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                                                                                                                              Thank
                                                                                                                              you
                                                                                                                              for
                                                                                                                              joining
                                                                                                                              the
                                                                                                                              Verifeye
                                                                                                                              waitlist.
                                                                                                                              🚀
                                                                                                                              You're
                                                                                                                              now
                                                                                                                              part
                                                                                                                              of
                                                                                                                              an
                                                                                                                              exciting
                                                                                                                              community
                                                                                                                              anticipating
                                                                                                                              updates
                                                                                                                              and
                                                                                                                              news
                                                                                                                              about
                                                                                                                              Verifeye.
      
                                                                                                                              Rest
                                                                                                                              assured,
                                                                                                                              we'll
                                                                                                                              keep
                                                                                                                              you
                                                                                                                              informed
                                                                                                                              about
                                                                                                                              any
                                                                                                                              developments
                                                                                                                              or
                                                                                                                              exciting
                                                                                                                              news
                                                                                                                              via
                                                                                                                              email
                                                                                                                              or
                                                                                                                              your
                                                                                                                              provided
                                                                                                                              phone
                                                                                                                              number.
                                                                                                                              Stay
                                                                                                                              tuned
                                                                                                                              for
                                                                                                                              exclusive
                                                                                                                              updates!
      
                                                                                                                              Have
                                                                                                                              a
                                                                                                                              fantastic
                                                                                                                              day!
                                                                                                                          </p>
                                                                                                                      </td>
                                                                                                                  </tr>
                                                                                                                  <tr>
                                                                                                                      <td height="20"
                                                                                                                          style="line-height:20px">
                                                                                                                          &nbsp;
                                                                                                                      </td>
                                                                                                                  </tr>
                                                                                                              </tbody>
                                                                                                          </table>
                                                                                                      </td>
                                                                                                  </tr>
                                                                                              </tbody>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                                  <tr>
                                                                      <td height="10" style="line-height:10px" colspan="1">
                                                                          &nbsp;</td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <table border="0" cellspacing="0" cellpadding="0"
                                              style="border-collapse:collapse;margin:0 auto 0 auto;width:100%;max-width:600px">
                                              <tbody>
                                                  <tr>
                                                      <td height="4" style="line-height:4px" colspan="3">&nbsp;</td>
                                                  </tr>
                                                  <tr>
                                                      <td width="15px" style="width:15px"></td>
                                                      <td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td>
                                                      <td style="text-align:center">
                                                          <div style="padding-top:10px;display:flex">
                                                              <div style="margin:auto"><img
                                                                      src="https://i.postimg.cc/NjJ4pz9L/verifeye.png"
                                                                      height="56" alt="" class="CToWUd"
                                                                      data-bit="iit"></div><br><br>
                                                          </div>
                                                          <div style="height:10px"></div>
                                                          <div style="color:#abadae;font-size:11px;margin:0 auto 5px auto">©
                                                              Verifeye. a Thintry Platform. Kondotty, Malappuram, Kerala.<br></div>
                                                      </td>
                                                      <td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td>
                                                      <td width="15px" style="width:15px"></td>
                                                  </tr>
                                                  <tr>
                                                      <td height="32" style="line-height:32px" colspan="3">&nbsp;</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
                                  </tr>
                              </tbody>
                          </table><span><img
                                  src="https://i.postimg.cc/NjJ4pz9L/verifeye.png"
                                  style="border:0;width:1px;height:1px" class="CToWUd" data-bit="iit"></span>
                      </td>
                  </tr>
              </tbody>
          </table>
      </body>`,
        });

        res.redirect('https://verifeye.thintry.com/waitlisted.html');
      }
    } else {
      res.status(400).json({ error: 'Full name and email are required.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
});


// Schedule a task to send waitlisted users data every 24 hours
cron.schedule('0 0 */1 * *', async () => {
  try {
    const waitlistedUsers = await User.find();
    
    // Create an HTML table for waitlisted users
    const tableRows = waitlistedUsers.map(user => `<tr><td>${user.full_name}</td><td>${user.email}</td><td>${user.tel}</td></tr>`);
    const htmlTable = `
      <table border="1">
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Tel</th>
        </tr>
        ${tableRows.join('')}
      </table>
    `;

    await transporter.sendMail({
      from: '"Thintry" <thintry.no@gmail.com>',
      to: "mrsajadpp@gmail.com",
      subject: 'Waitlisted Users Data',
      html: htmlTable,
    });

    console.log('Waitlisted users data sent successfully.');
  } catch (error) {
    console.error('Error sending waitlisted users data:', error);
  }
});

module.exports = router;
