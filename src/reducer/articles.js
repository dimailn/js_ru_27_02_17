import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

export default (state = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)
        case ADD_COMMENT:
            return state.map(article => {
              const comments = article.comments.map(id => id)
              if(article.id == action.payload.article_id)
                comments.push(action.payload.id)
              return {...article, comments}
            })

    }

    return state
}