const functions = require('firebase-functions');
const nodemailer = require('nodemailer')
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
})

exports.sendMail = functions.https.onCall((data, context) => {
  let html = `
    <h1 style="color: #9E9FA5; font-size: 52px;">Autumn Inc.</h1>
    <div style="color: #333B40">
      <p>お問い合わせありがとうございます！！こんにちは！${data.destination}</p>
      <h2>こんにちは！こんにちは！</h2>
      <h3>こんにちは！こんにちは！</h3>
      <h4>こんにちは！こんにちは！</h4>
      <p><b>${data.title}</b></p>
      <p>${data.name}</p>
      <p>お問い合わせありがとうございます！！</p>
      <p>お問い合わせありがとうございます！！</p>
      <p>お問い合わせありがとうございます！！</p>
    </div>
  `

  let email = {
    from: gmailEmail,
    to: data.destination,
    cc: gmailEmail,
    subject: 'test message',
    text: 'This is a test message from vue.',
    html: html,
  }
  mailTransport.sendMail(email, (err, info) => {
    if (err) {
      return console.error(err)
    }
    console.log('success')
  })
})
