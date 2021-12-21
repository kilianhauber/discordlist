import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="icon" type="image/png" href="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fdiscord.com%2Fassets%2Ff9bb9c4af2b9c32a2c5ee0014661546d.png&sp=1640104810T36f38bb46c3d423b1213d2fa43f88709e8edf03b6a2afb87272395a52a28f3eb" sizes="any" />
        </Head>
        <body className="bg-darkblue text-gray-200 font-prompt font-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
