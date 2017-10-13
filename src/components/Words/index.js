import { connect } from 'react-redux'
import { getWords, saveWord } from './WordsActions'
import Words from './Words'

const mapStateToProps = state => ({
  list: state.words.list,
  form: state.words.form
})

export default connect(mapStateToProps, { getWords, saveWord })(Words)
