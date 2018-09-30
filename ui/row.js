// Packages
import React, { PureComponent } from 'react'

// UI
import { designTokens } from './theme'

class Row extends PureComponent {
  render() {
    const { children, size } = this.props

    return (
      <div>
        {children}

        <style jsx>{`
          div {
            max-width: ${size};
            margin-left: auto;
            margin-right: auto;
            padding-left: ${designTokens.spacing.large};
            padding-right: ${designTokens.spacing.large};
          }
        `}</style>
      </div>
    )
  }
}

Row.defaultProps = {
  size: '1200px'
}

export default Row
