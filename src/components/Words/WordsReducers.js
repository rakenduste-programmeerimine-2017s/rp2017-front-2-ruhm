import * as types from '../../constants/ActionTypes'

const INITIAL_STATE = {
  form: {
    error: null,
    message: null,
    loading: false
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
    case types.WORDS_SAVE_STARTED: {
      return {
        ...state,
        form: {
          error: null,
          message: null,
          loading: true
        }
      }
    }
    case types.WORDS_SAVED: {
      const { error, msg } = action
      return {
        ...state,
        form: {
          error: error || null,
          message: msg || null,
          loading: false
        }
      }
    }
    default:
      return {
        ...state
      }
  }
}
