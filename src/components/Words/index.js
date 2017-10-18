import React from 'react'
import Api from '../../utils/api'

import Form from '../Form/Form'
import List from '../List/List'


class Words extends React.Component {
	constructor (props) {
		super(props)
	}

	componentDidMount () {
		console.log('laetud')
		Api('GET', '/words', {})
		.then( results => {
			console.log(results)
		})
		.catch( error => {
			console.error(error)
		})
	}

	render () {
  	return (
	    <div id='words'>
	      <h1>Words</h1>
	      <Form />
	      <br />
	    <List />
      </div>
    )
  }

}

export default Words
