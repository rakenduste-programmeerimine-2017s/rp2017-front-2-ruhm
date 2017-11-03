import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Layout } from 'antd'
import './Home.scss'
const { Content } = Layout

const Home = () => {
  return (
    <div id='home'>
      <Layout>
        <Content className='content-wrap' id='some-id'>
          <h1>Welcome!</h1>
          <Link to='/words'>
            <Button>Words</Button>
          </Link>
          <br />
        </Content>
      </Layout>
    </div>
  )
}

export default Home
