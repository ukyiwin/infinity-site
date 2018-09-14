// Packages
import React from 'react'

// Layouts
import App from '../layouts/app'

// UI
import { colors, designTokens } from '../ui/theme'

const Home = () => {
  return (
    <App>
      <main>
        <div>
          <svg width="160px" viewBox="0 0 24 24">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,20.8 C16.8601058,20.8 20.8,16.8601058 20.8,12 C20.8,7.1398942 16.8601058,3.2 12,3.2 C7.1398942,3.2 3.2,7.1398942 3.2,12 C3.2,16.8601058 7.1398942,20.8 12,20.8 Z"
                fill={colors.white}
              />
            </g>
          </svg>

          <h1>
            Manage your finances <br /> with ease.
          </h1>
        </div>
      </main>

      <style jsx>{`
        main {
          display: flex;
          min-height: 100vh;
          align-items: center;
          width: 100%;
          text-align: center;
        }

        div {
          width: 100%;
        }

        h1 {
          font-size: 100px;
          color: ${colors.white};
          letter-spacing: -4px;
          margin-top: ${designTokens.spacing.xxxLarge};
          display: block;
        }
      `}</style>
    </App>
  )
}

export default Home
