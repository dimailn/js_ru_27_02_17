import {INCREMENT, DELETE_ARTICLE, UPDATE_FILTER} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function updateFilter(new_filter) {
  return {
    type: UPDATE_FILTER,
    payload: new_filter
  }
}