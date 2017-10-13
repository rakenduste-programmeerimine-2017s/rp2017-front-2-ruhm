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

export const saveWord = (name) => dispatch => {
  dispatch({ type: types.WORDS_SAVE_STARTED })

  Api('POST', '/words', {
    data: { name }
  })
    .then(results => {
      console.log(results)

      const { word } = results
      const msg = 'Word saved successfully ' + word.name

      dispatch({ type: types.WORDS_SAVED, msg })
      getWords()(dispatch)
    })
    .catch(error => {
      console.error(error)

      let errorMessage = error.data.errors.name
        ? error.data.errors.name.msg
        : error.data.errors.msg

      dispatch({ type: types.WORDS_SAVED, error: errorMessage })
    })
}
