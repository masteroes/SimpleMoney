exports.sendMail = function (opts) {
   var mailOpts, smtpTransport;
   var nodemailer = require('nodemailer');
   console.log ('Creating Transport');

   smtpTransport = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
         user: 'vndbluepi@gmail.com',
         pass: 'P@ssword1234'
      }
});

// mailing options

mailOpts = {
   from: opts.from,
   to: opts.to,
   subject: opts.subject,
   text : opts.text
}
 /*  html: opts.byrom: 'Frblurdybloop.com>', // sender address 
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers 
    subject: 'Hello ✔', // Subject line 
    text: 'Hello world 🐴', // plaintext body 
    html: '<b>Hello world 🐴</b>' // html body 
*/


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