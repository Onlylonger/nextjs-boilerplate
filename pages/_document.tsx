// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from 'next/document'
import * as React from 'react'

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  public render() {
    return (
      <html lang="en">
        <title>YDJ</title>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          {/* keywords 相对应的搜索引擎支持权重下降 */}
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta
            name="format-detection"
            content="telephone=no, address=no, email=no"
          />
          <meta name="robots" content="all" />
          <meta name="author" content="" />
          <meta name="copyright" content="" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
            sizes="64x64"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
