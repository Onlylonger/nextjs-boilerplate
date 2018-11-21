// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
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
        <Head>
          <style>{`
          /*清除样式*/
          body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,input,a,p,textarea{
              margin: 0;
              padding: 0;
          }

          ul,ol,li{
              list-style: none;
          }

          a{
              text-decoration: none;
              display: block; 
          }

          img{
              border: none;
              display: block;
          }

          /*清除浮动*/
          .clearfloat:after{
              display: block;
              clear: both;
              content: "";
              visibility: hidden;
              height: 0;
          }
          .clearfloat{
              zoom: 1;
          }
          `}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
