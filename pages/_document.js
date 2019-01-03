// Packages
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'

// Root
import pkg from '../package'

// UI
import { colors } from '../ui/theme'

const { publicRuntimeConfig } = getConfig()
const { ASSETS_URL } = publicRuntimeConfig

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
          <meta name="theme-color" content={colors.black} />
          <meta name="description" content={pkg.description} />
          <meta name="keywords" content={pkg.keywords} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@bukinoshita" />
          <meta name="twitter:creator" content="@bukinoshita" />
          <meta name="twitter:title" content={pkg.name} />
          <meta name="twitter:description" content={pkg.description} />
          <meta
            property="twitter:image:src"
            content={`${ASSETS_URL}/infinity-cover/infinity.png`}
          />

          <meta property="og:url" content="https://infinity.now.sh" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pkg.name} />
          <meta
            property="og:image"
            content={`${ASSETS_URL}/infinity-cover/infinity.png`}
          />
          <meta property="og:description" content={pkg.description} />
          <meta property="og:site_name" content={pkg.name} />

          <link
            rel="apple-touch-icon"
            href={`${ASSETS_URL}/infinity-favicon/infinity-favicon@64x64.png`}
          />
          <link
            rel="icon"
            href={`${ASSETS_URL}/infinity-favicon/infinity-favicon@64x64.png`}
            type="image/png"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
