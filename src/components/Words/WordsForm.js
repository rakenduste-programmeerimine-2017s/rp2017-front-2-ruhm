import React from 'react'

class WordsForm extends React.Component {
  constructor (props) {
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit (event) {
    event.preventDefault()

    const name = document.querySelector('input#name').value
    this.props.saveWord(name)
  }

  render () {
    console.log('RENDER FORM')

    const { form: { message, error, loading } } = this.props

    return (
      <div className='word-form'>
        <p>{message || error}</p>
        <form onSubmit={this.formSubmit}>
          <input id='name' type='text' />
          <input disabled={loading} type='submit' value='save' />
        </form>
      </div>
    )
  }
}

export default WordsForm
