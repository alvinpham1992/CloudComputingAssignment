// thiết lập đối tượng, nội dung gửi mail


var mailOption = {
  from: 'DaiGia',
  to: "",
  subject: "",
  rejectUnauthorized: false,
  text:""
}

module.exports = function sendMail() {

  this.mail = mailOption;
  this.verifyMail = function(receiver, link) {
    console.log(link);
    this.mail.to = receiver;
    this.mail.subject= '[Coffee WebShop] - Verify you Mail to login our Webshop',
    this.mail.text =  "You recieved message from CoffeeWebshop. Here is you link for verifying your username, please click it. Thank you for using our service! \n Link: " + link;

  }

  this.resetMail = function (receiver) {
    this.mail.to = receiver
    this.mail.subject = '[Coffee WebShop] - Get your new password',
    this.mail.text = "You recieved message from CoffeeWebshop . Your new password to login our web site is: ABCDE12345. Thank you for using our service ! "
  }

  // resetMail: function() {
  //   this.from = 'DaiGia',
  //     this.to = "",
  //
  //     this.rejectUnauthorized = false,
  //
  //   this.addReceiver = function(receiver) {
  //     this.to = rev
  //   }
  // }
}
