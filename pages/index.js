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

// Services
import api from '../services/api'

class Home extends PureComponent {
  constructor() {
    super()

    this.state = { email: '', hint: {} }

    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async componentDidMount() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/service-worker.js')
      } catch (error) {
        console.warn('service worker registration failed', error.message)
      }
    }
  }

  onInputChange(event) {
    const { target } = event
    const { name, value } = target

    this.setState({ [name]: value })
  }

  async onSubmit(event) {
    event.preventDefault()

    const { email } = this.state

    try {
      await api('/', {
        params: {
          email,
          company: 'Infinity'
        }
      })
      this.setState({
        hint: { type: 'green', message: 'Email sent successfully' }
      })
    } catch (error) {
      console.error(error)
      this.setState({
        hint: {
          type: 'red',
          message: 'Something went wrong, please try again!'
        }
      })
    }
  }

  render() {
    const { email, hint } = this.state
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
                It’s never been that easy to understand about your finances
              </h2>

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <Input
                    type="email"
                    placeholder="Your e-mail address"
                    name="email"
                    size={SIZE_LARGE}
                    style={{ width: '400px' }}
                    value={email}
                    onChange={this.onInputChange}
                    hint={hint}
                  />

                  <Button
                    size={SIZE_LARGE}
                    style={{ marginLeft: designTokens.spacing.medium }}
                  >
                    Join beta
                  </Button>
                </div>
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

          .form-group {
            display: flex;
            align-items: baseline;
          }
        `}</style>
      </App>
    )
  }
}

export default Home
