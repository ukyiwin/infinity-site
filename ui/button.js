// Packages
import React, { PureComponent } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

// Helpers
import {
  APPEARANCE_PRIMARY,
  SIZE_MEDIUM,
  SIZE_LARGE
} from '../helpers/constants'

// UI
import { typography, colors, designTokens } from './theme'

class Button extends PureComponent {
  render() {
    const { children, type, appearance, size, style } = this.props

    const classname = classnames({
      primary: appearance === APPEARANCE_PRIMARY,
      large: size === SIZE_LARGE
    })

    return (
      <button className={classname} type={type} aria-label={type} style={style}>
        {children}

        <style jsx>{`
          button {
            font-size: ${typography.h600.fontSize};
            line-height: ${typography.h600.lineHeight};
            font-weight: ${typography.h600.fontWeight};
            text-align: center;
            border: 1px solid ${colors.white};
            border-radius: ${designTokens.radius};
            cursor: pointer;
            display: inline-block;
            transition: ${designTokens.transition};
            box-shadow: ${designTokens.shadow};
            padding: ${designTokens.spacing} ${designTokens.spacing.medium};
            background: transparent;
            text-transform: uppercase;
            letter-spacing: 1.5px;
          }

          .primary {
            background-color: ${colors.white};
            color: ${colors.black};
          }

          .large {
            font-size: ${typography.h500.fontSize};
            line-height: ${typography.h500.lineHeight};
            font-weight: ${typography.h500.fontWeight};
            padding: ${designTokens.spacing.medium}
              ${designTokens.spacing.xLarge};
          }

          @media ${designTokens.responsive.phone} {
            button {
              display: block;
              width: 100%;
              margin: ${designTokens.spacing.medium} 0 !important;
            }
          }
        `}</style>
      </button>
    )
  }
}

Button.defaultProps = {
  appearance: APPEARANCE_PRIMARY,
  size: SIZE_MEDIUM
}

Button.propTypes = {
  appearance: PropTypes.string,
  size: PropTypes.string
}

export default Button
