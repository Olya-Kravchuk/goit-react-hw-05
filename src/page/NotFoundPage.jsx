import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <h1>This page does not exist.</h1>
      <Link to="/">Go to home</Link>
    </div>
  )
}

export default NotFoundPage