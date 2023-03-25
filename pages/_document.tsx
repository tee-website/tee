import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script async src="https://smtpjs.com/v3/smtp.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
