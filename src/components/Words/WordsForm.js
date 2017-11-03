import React from 'react'
import { Button, Form, message } from 'antd'

class WordsForm extends React.Component {
  constructor (props) {
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.wordsForm)
    if (nextProps.wordsForm.message && nextProps.wordsForm.message !== this.props.wordsForm.message) {
      message.success(nextProps.wordsForm.message)
    }
    if (nextProps.wordsForm.error && nextProps.wordsForm.error !== this.props.wordsForm.error) {
      message.error(nextProps.wordsForm.error)
    }
  }

  formSubmit (event) {
    event.preventDefault()

    const name = document.querySelector('input#name').value
    this.props.saveWord(name)
  }

  render () {
    console.log('RENDER FORM')

    const { wordsForm, wordsForm: { error, loading } } = this.props
    console.log(this.props.form)
    return (
      <div className='word-form'>
        <p>{wordsForm.message || error}</p>
        <form onSubmit={this.formSubmit}>
          <input id='name' type='text' />
          <Button loading={loading} htmlType='submit'>Save</Button>
        </form>
      </div>
    )
  }
}

export default Form.create()(WordsForm)
