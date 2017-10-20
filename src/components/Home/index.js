import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'antd'

import './Home.scss'

const Home = () => {
  return (
    <div id='home'>
      <h1>Welcome!</h1>
      <Link to='/words'>
        <Button>Words</Button>
      </Link>
    </div>
  )
}

export default Home
