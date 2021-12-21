import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="shortcut icon " type="images/x-icon" href="./images/favicon.ico" sizes="any" />
        </Head>
        <body className="bg-dcdark text-gray-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
