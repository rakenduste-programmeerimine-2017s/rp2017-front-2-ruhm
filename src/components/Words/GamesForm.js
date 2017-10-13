import React from 'react'
import Api from '../../utils/api'

class GamesForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.saveGame = this.saveGame.bind(this)
  }

  saveGame (event) {
    event.preventDefault()

    const name = document.getElementById('player-name').value

    Api('POST', '/games', {
      data: { player: name }
    })
      .then(results => {
        console.log(results)

        const { game } = results

        this.setState({
          msg: 'Game saved successfully for player ' + game.player,
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
    console.log('RENDER FORM')

    const { msg, error } = this.state

    return (
      <div className='game-form'>
        <p>{msg || error}</p>
        <form onSubmit={this.saveGame}>
          <input placeholder='Player' id='player-name' type='text' />
          <input type='submit' value='save' />
        </form>
      </div>
    )
  }
}

export default GamesForm
