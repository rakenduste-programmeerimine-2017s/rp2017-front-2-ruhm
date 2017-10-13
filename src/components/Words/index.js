import { connect } from 'react-redux'
import { getWords } from './WordsActions'
import Words from './Words'

const mapStateToProps = state => ({
  list: state.words.list,
  form: state.words.form
})

export default connect(mapStateToProps, { getWords })(Words)
