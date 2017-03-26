import {normalizedComments} from '../fixtures'
import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import {arrToMap} from './utils'
import {Record, Map} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const DefaultReducerState = Record({
    entities: new Map({}),
    loading: false,
    error: null,
    loaded: false
})

export default (state = new DefaultReducerState, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            const new_comment = new CommentModel({
                id: randomId,
                ...payload.comment
            })
            return state.updateIn(['entities'], entities => entities.concat(new_comment))

        case LOAD_ALL_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            const { response } = payload
            return state
                .mergeIn(['entities'], arrToMap(response, CommentModel))
                .set('loading', false)
                .set('loaded', true)

        case LOAD_ALL_COMMENTS + FAIL:
            return state
                .set('error', error.statusText)
                .set('loading', false)
    }

    return state
}