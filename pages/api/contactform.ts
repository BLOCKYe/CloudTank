export default (req: any, res: any) => {
  let nodemailer = require("nodemailer");
  require("dotenv").config();
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: "mail42.mydevil.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: "kontakt@cloudtank.pl",
    to: "kontakt@cloudtank.pl",
    subject: req.body.type,
    text: req.body.nick,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Poszlo: " + info.response);
      res.send("success");
    }
  });

  res.status(200);
};
