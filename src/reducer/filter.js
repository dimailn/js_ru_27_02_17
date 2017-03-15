import {UPDATE_FILTER} from '../constants'

export default (filter = {from: new Date, to: new Date}, action) => {
    const { type } = action

    switch (type) {
        case UPDATE_FILTER:
            return action.payload
    }

    return filter
}