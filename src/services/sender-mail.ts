import Mailjet from 'node-mailjet';
const mailjet = Mailjet.apiConnect('79b9a9e6e2e042c2e7bf48fbf2dcb79c', '3f05e3c9affe1bc10f6ebd8e85a7ec76');

export default function sendEmail(recipient: string, emailHtml: string | object) {

  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: "charlesjutheau1@gmail.com",
            Name: "ESSOME Charles"
          },
          To: [
            {
              Email: recipient,
              Name: recipient
            }
          ],
          Subject: "Your email flight plan!",
          TextPart: "Email Template generator",
          HTMLPart: emailHtml
        }
      ]
    })

  request
    .then((result) => {
      console.log(result.body)
    })
    .catch((err) => {
      console.log(err.statusCode)
    });
}

