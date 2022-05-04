import React from 'react'

import blackhole from '../../images/blackhole.webp'

const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <img src={blackhole} alt="Spinner" className="spinner" />
    </div>
  )
}

export default Spinner