exports.sendMail = function (opts) {
   var mailOpts, smtpTransport;
   var nodemailer = require('nodemailer');
   console.log ('Creating Transport');

   smtpTransport = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
         user: 'loopbacktraining@gmail.com',
         pass: 'loopbacktraining1234'
      }
});

// mailing options

mailOpts = {
   from: opts.from,
   to: opts.to,
   subject: opts.subject,
   text : opts.text
}
 
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
exports.generateOTP=function() 
{
var random = require("random-js")(); 
var value = random.integer(100000,999999);
console.log(value);
return value.toString();
}
