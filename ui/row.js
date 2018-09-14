// Packages
import React from 'react'

const Row = ({ children, size }) => {
  return <div>{children}</div>
}

Row.defaultProps = {
  size: '1200px'
}

export default Row
