import React from 'react'
import Api from '../../utils/api'

import WordsForm from './WordsForm'
import GamesForm from './GamesForm'
import List from './List'

class Words extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      words: []
    }
  }

  componentDidMount () {
    console.log('laetud')
    Api('GET', '/words', {})
      .then(results => {
        console.log(results)
        const { words } = results
        this.setState({ words })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    console.log('RENDER WORDS')
    const { words } = this.state

    return (
      <div id='words'>
        <h1>Words</h1>
        <br />
        <WordsForm />
        <br />
        <GamesForm />
        <br />
        <List words={words} />
      </div>
    )
  }
}

export default Words
