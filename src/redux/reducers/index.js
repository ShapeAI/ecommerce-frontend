import { combineReducers } from 'redux'
import auth from './auth'
import loader from './loader'
import category from './category'


export default combineReducers({
    auth,
    loader,
    category
})
