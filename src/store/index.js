import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index'
import logger from '../middlewares/logger'
import id_generator from '../middlewares/id_generator'

const enhancer = applyMiddleware(logger, id_generator)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store