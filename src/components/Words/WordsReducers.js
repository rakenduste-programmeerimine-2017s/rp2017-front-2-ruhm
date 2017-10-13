import * as types from '../../constants/ActionTypes'

const INITIAL_STATE = {
  form: {
    error: null,
    message: null
  },
  list: {
    data: [],
    loading: true,
    error: null
  }
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.WORDS_LOADED: {
      const { words } = action
      return {
        ...state,
        list: {
          data: words,
          loading: false,
          error: null
        }
      }
    }
    default:
      return {
        ...state
      }
  }
}
