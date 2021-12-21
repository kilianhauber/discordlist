import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="icon" type="image/png" href="https://github.com/kilihbr/discordlist/blob/main/public/images/logo.png?raw=true" sizes="any" />
        </Head>
        <body className="bg-dcdark text-gray-200 font-prompt font-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
