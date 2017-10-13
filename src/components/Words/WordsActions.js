import * as types from '../../constants/ActionTypes'
import Api from '../../utils/api'

export const getWords = () => dispatch => {
  return Api('GET', '/words', {})
  .then(results => {
    const { words } = results
    dispatch({ type: types.WORDS_LOADED, words })
  })
  .catch(error => {
    console.error(error)
  })
}
