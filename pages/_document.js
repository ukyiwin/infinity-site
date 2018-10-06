// Packages
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

// Root
import pkg from '../package'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="manifest" href="static/manifest.json" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#0e1012" />
          <meta name="description" content={pkg.description} />
          <meta name="keywords" content={pkg.keywords} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
