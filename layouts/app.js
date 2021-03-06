// Packages
import React, { Fragment } from 'react'
import Head from 'next/head'

// Root
import pkg from '../package'

if (global.document) {
  const info = [`${pkg.version}`, `Have a great day! 🎉`]

  for (const message of info) {
    console.log(message)
  }
}

const App = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>
          {pkg.name} — {pkg.description}
        </title>
      </Head>

      {children}

      <style jsx global>{`
        html {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        :root {
          -moz-tab-size: 4;
          tab-size: 4;
        }

        html {
          line-height: 1.15; /* 1 */
          -webkit-text-size-adjust: 100%; /* 2 */
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          background-color: #0e1012;
        }

        hr {
          height: 0;
        }

        fieldset {
          border: none;
          padding: 0;
        }

        abbr[title] {
          text-decoration: underline dotted;
        }

        b,
        strong {
          font-weight: bolder;
        }

        code,
        kbd,
        samp,
        pre {
          font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo,
            Courier, monospace; /* 1 */
          font-size: 1em; /* 2 */
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit; /* 1 */
          font-size: 100%; /* 1 */
          line-height: 1.15; /* 1 */
          margin: 0; /* 2 */
        }

        button,
        select {
          /* 1 */
          text-transform: none;
        }

        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          -webkit-appearance: button;
        }

        button::-moz-focus-inner,
        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }

        button:-moz-focusring,
        [type='button']:-moz-focusring,
        [type='reset']:-moz-focusring,
        [type='submit']:-moz-focusring {
          outline: 1px dotted ButtonText;
        }

        legend {
          padding: 0;
        }

        progress {
          vertical-align: baseline;
        }

        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          height: auto;
        }

        [type='search'] {
          -webkit-appearance: textfield; /* 1 */
          outline-offset: -2px; /* 2 */
        }

        [type='search']::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
          -webkit-appearance: button; /* 1 */
          font: inherit; /* 2 */
        }

        summary {
          display: list-item;
        }
      `}</style>
    </Fragment>
  )
}

export default App
