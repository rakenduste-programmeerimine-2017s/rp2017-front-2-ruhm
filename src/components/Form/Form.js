import React from 'react'
import Api from '../../utils/api'

class Form extends React.Component {
  constructor (props) {
    super(props)

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
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    return (
      <form onSubmit={this.saveWord}>
        <input id='name' type='text' />
        <input type='submit' value='save' />
      </form>
    )
  }
}

export default Form