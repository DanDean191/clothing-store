import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to='/products'>Enter</Link>
    </div>
  )
}

export default Home