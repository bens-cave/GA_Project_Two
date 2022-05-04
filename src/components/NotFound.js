import React from 'react'

import { Link } from 'react-router-dom'

import Spinner from './utilities/Spinner'

const NotFound = () => {
  return (
    <main id='notFound'>
      <div id='content'>
        <h2>Error 404, Page Not Found!</h2>
        <Spinner />
        <div className='button'>
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound