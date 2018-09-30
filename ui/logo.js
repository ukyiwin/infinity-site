// Packages
import React, { PureComponent } from 'react'

class Logo extends PureComponent {
  render() {
    const { size, color } = this.props

    return (
      <svg width={size} viewBox="0 0 24 24">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,20.8 C16.8601058,20.8 20.8,16.8601058 20.8,12 C20.8,7.1398942 16.8601058,3.2 12,3.2 C7.1398942,3.2 3.2,7.1398942 3.2,12 C3.2,16.8601058 7.1398942,20.8 12,20.8 Z"
            fill={color}
          />
        </g>
      </svg>
    )
  }
}

Logo.defaultProps = {
  size: '70px',
  color: 'white'
}

export default Logo
