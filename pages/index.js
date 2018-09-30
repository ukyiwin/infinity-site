// Packages
import React, { PureComponent } from 'react'

// Layouts
import App from '../layouts/app'

// Helpers
import { SIZE_LARGE } from '../helpers/constants'

// UI
import Row from '../ui/row'
import Logo from '../ui/logo'
import Button from '../ui/button'
import Input from '../ui/input'
import { colors, designTokens } from '../ui/theme'

class Home extends PureComponent {
  async componentDidMount() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/service-worker.js')
        console.log('service worker registration successful')
      } catch (error) {
        console.warn('service worker registration failed', error.message)
      }
    }
  }

  render() {
    return (
      <App>
        <Row>
          <main>
            <div>
              <Logo />

              <h1>
                manage your <br />
                finances with ease.
              </h1>

              <h2>
                it’s never been that easy to understand about your finances
              </h2>

              <form>
                <Input
                  type="email"
                  placeholder="Your e-mail address"
                  size={SIZE_LARGE}
                  style={{ width: '400px' }}
                />

                <Button
                  size={SIZE_LARGE}
                  style={{ marginLeft: designTokens.spacing.medium }}
                >
                  Join beta
                </Button>
              </form>
            </div>
          </main>
        </Row>

        <style jsx>{`
          main {
            display: flex;
            min-height: 100vh;
            align-items: center;
            width: 100%;
          }

          div {
            width: 100%;
          }

          h1 {
            font-size: 60px;
            color: ${colors.white};
            letter-spacing: -4px;
            margin-top: ${designTokens.spacing.large};
            margin-bottom: 24px;
            display: block;
          }

          h2 {
            color: #b4b4b4;
            font-size: 20px;
            font-weight: 500;
            margin-top: 0;
            margin-bottom: 48px;
          }
        `}</style>
      </App>
    )
  }
}

export default Home
