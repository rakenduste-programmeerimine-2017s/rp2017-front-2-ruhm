import React from 'react'
import Api from '../../utils/api'

import Form from './Form'
import List from './List'

class Words extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log('laetud')
    Api('GET', '/words', {})
      .then(results => {
        console.log(results)
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    console.log('renderdatud')
    return (
      <div id='words'>
        <h1>Words</h1>
        <br />
        <Form />
        <br />
        <List />
      </div>
    )
  }
}

export default Words
