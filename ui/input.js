// Packages
import React, { PureComponent } from 'react'
import classnames from 'classnames'
import { If } from 'react-extras'

// Helpers
import {
  APPEARANCE_PRIMARY,
  SIZE_MEDIUM,
  SIZE_LARGE
} from '../helpers/constants'

// UI
import { typography, colors, designTokens } from './theme'

class Input extends PureComponent {
  render() {
    const {
      type,
      appearance,
      size,
      placeholder,
      name,
      value,
      onChange,
      hint,
      style
    } = this.props

    const inputClassname = classnames({
      primary: appearance === APPEARANCE_PRIMARY,
      large: size === SIZE_LARGE
    })

    const hintClassname = classnames({
      hint,
      'hint--green': hint && hint.type ? hint.type === 'green' : '',
      'hint--red': hint && hint.type ? hint.type === 'red' : ''
    })

    return (
      <fieldset>
        <input
          className={inputClassname}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-label={name}
          style={style}
        />

        <If condition={Boolean(hint && hint.message)}>
          <span className={hintClassname}>{hint.message}</span>
        </If>

        <style jsx>{`
          input {
            font-size: ${typography.paragraph.fontSize};
            line-height: ${typography.paragraph.lineHeight};
            font-weight: ${typography.paragraph.fontWeight};
            border: 1px solid transparent;
            border-radius: ${designTokens.radius};
            display: inline-block;
            transition: ${designTokens.transition};
            box-shadow: ${designTokens.shadow};
            padding: ${designTokens.spacing} ${designTokens.spacing.medium};
            background: transparent;
            max-width: 100%;
          }

          .primary {
            background-color: ${colors.gray};
            color: ${colors.white};
            border-color: ${colors.gray};
          }

          .large {
            font-size: ${typography.h500.fontSize};
            line-height: ${typography.h500.lineHeight};
            font-weight: ${typography.h500.fontWeight};
            padding: ${designTokens.spacing.medium};
          }

          .hint {
            display: table;
            margin-top: ${designTokens.spacing};
          }

          .hint--green {
            color: ${colors.green};
          }

          .hint--red {
            color: ${colors.red};
          }
        `}</style>
      </fieldset>
    )
  }
}

Input.defaultProps = {
  appearance: APPEARANCE_PRIMARY,
  size: SIZE_MEDIUM
}

export default Input
