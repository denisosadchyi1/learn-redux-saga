import { showAlert } from "./actions"
import { CREATE_POST } from "./actionTypes"

const spamWords = ['fuck', 'test']

export const spamWordsMiddleware = ({dispatch}) => {
  return (next) => {
    return (action) => {
      if(action.type === CREATE_POST) {
        const found = spamWords.filter(w => action.payload.title.includes(w))
        if(found.length){
          return dispatch(showAlert('You enter some spam word'))
        }
      }
      return next(action)
    }
  }
}