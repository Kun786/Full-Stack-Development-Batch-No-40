const nodemailer = require("nodemailer");

const senEmail = async (payLoad) => {
  try {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // create reusable transporter object using the default SMTP transport
    const _SmtpService = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'itismyworkspace@gmail.com', // generated ethereal user
        pass: 'atlgyygushdcpssc', // generated ethereal password
      },
    });

    //Email Object
    const _EmailObject = {
      from: payLoad.email, // sender address
      to: 'itismyworkspace@gmail.com', // list of receivers
    //   subject: payLoad.subject, // Subject linea
      html: `<b>
      <h3>UserEmail: ${payLoad.email}</h3>
      <h3>UserMessage: ${payLoad.message}</h3>
      <br>
      <br>
      <br>
      <h5>Note: This is One Time Link and will Expire in 5 minute You cannot Use it Once it Expired</h5>
      </b>`, // html body
    };

    // Send Email 

    const _SendEmail = await _SmtpService.sendMail(_EmailObject);
    return {
      Message: `Email has sent successfuly one of our team member will contact you shortly`,
      Data: true,
      Result: _SendEmail.response,
    };
  } catch (error) {
    return {
      Message: error.message,
      Data: false,
      Result: null
    }

  }

}

module.exports = { senEmail };