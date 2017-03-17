import React from 'react'

const ClickCount = ({handleClick}) => (
  <p className="App-intro">
    <input type="button" value="Click Me!!" onClick={handleClick} />
  </p>
)

export default ClickCount