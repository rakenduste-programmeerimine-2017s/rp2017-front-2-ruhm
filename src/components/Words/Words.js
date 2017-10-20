import React from 'react'

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
    console.log(this.props)

    const { saveWord, list: { data }, form } = this.props

    return (
      <div id='words'>
        <h1>Words</h1>
        <br />
        <WordsForm saveWord={saveWord} form={form} />
        <br />
        <GamesForm />
        <br />
        <List words={data} />
      </div>
    )
  }
}

export default Words
