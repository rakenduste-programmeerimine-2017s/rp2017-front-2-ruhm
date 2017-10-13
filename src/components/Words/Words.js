import React from 'react'
import Api from '../../utils/api'

import WordsForm from './WordsForm'
import GamesForm from './GamesForm'
import List from './List'

class Words extends React.Component {
  componentDidMount () {
    console.log('laetud')
    this.props.getWords()
  }

  render () {
    console.log('RENDER WORDS')

    const { getWords, list: { data }, form } = this.props

    return (
      <div id='words'>
        <h1>Words</h1>
        <br />
        <WordsForm getWords={getWords} />
        <br />
        <GamesForm />
        <br />
        <List words={data} />
      </div>
    )
  }
}

export default Words
