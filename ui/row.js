// Packages
import React, { PureComponent } from 'react'

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
