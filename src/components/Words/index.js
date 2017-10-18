import React from 'react'
import Api from '../../utils/api'

import Form from '../Form/Form'
import List from '../List/List'


class Words extends React.Component {
	constructor (props) {
		super(props)
		this.state = { words: [] }
	}

	componentDidMount () {
		console.log('laetud')
		Api('GET', '/words', {})
		.then( results => {
			console.log(results)
			const { words } = results
			this.setState({
				words
			})
		})
		.catch( error => {
			console.error(error)
		})
	}

	render () {
		console.log('renderdatud')
		const { words } = this.state
		return (
			<div id='words'>
				<h1>Words</h1>
				<Form />
				<br />
				<List words={words}/>
			</div>
		)
	}

}

export default Words
