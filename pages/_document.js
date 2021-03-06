import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html  lang="zh-cmn-Hans"  >
        <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="首页 | 汪中杰的技术博客,让技术产生价值!"
        />
        </Head>
        <body className="custom_class gray-filter"  >
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}