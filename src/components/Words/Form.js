import React from 'react'
import Api from '../../utils/api'

class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.saveWord = this.saveWord.bind(this)
  }

  saveWord (event) {
    event.preventDefault()

    const name = document.querySelector('input#name').value

    Api('POST', '/words', {
      data: { name }
    })
      .then(results => {
        console.log(results)

        const { word } = results

        this.setState({
          msg: 'Word saved successfully ' + word.name,
          error: false
        })
      })
      .catch(error => {
        console.error(error)

        let errorMessage = error.data.errors.name
          ? error.data.errors.name.msg
          : error.data.errors.msg

        this.setState({
          error: errorMessage,
          msg: false
        })
      })
  }

  render () {
    const { msg, error } = this.state

    return (
      <div className='word-form'>
        <p>{msg || error}</p>
        <form onSubmit={this.saveWord}>
          <input id='name' type='text' />
          <input type='submit' value='save' />
        </form>
      </div>
    )
  }
}

export default Form
