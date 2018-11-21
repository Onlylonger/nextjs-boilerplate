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
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head />
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
