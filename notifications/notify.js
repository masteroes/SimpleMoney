exports.sendMail = function (opts) {
   var mailOpts, smtpTransport;

   console.log ('Creating Transport');

   smtpTransport = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
         user: config.email,
         pass: config.password
      }
});

// mailing options
mailOpts = {
   from: opts.from,
   replyTo: opts.from,
   to: opts.to,
   subject: opts.subject,
   html: opts.body
};

console.log('mailOpts: ', mailOpts);

console.log('Sending Mail');
// Send mail
smtpTransport.sendMail(mailOpts, function (error, response) {
   if (error) {
      console.log(error);
   }else {
      console.log('Message sent: ' + response.message);
   }
   console.log('Closing Transport');
   smtpTransport.close();
   });

}