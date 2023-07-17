import Mail from '@ioc:Adonis/Addons/Mail'

export const sendMail = async (to: string, subject: string, html: string) => {
  await Mail.send((message) => {
    message.from('info@example.com').to(to).subject(subject).html(html)
  })
}
