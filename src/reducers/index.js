import { combineReducers } from 'redux'
import todos from './Todo/todos'
import visibilityFilter from './Todo/todoVisibilityFilter'
import {notes, currentNote} from './Note/notes'
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
    todos,
    visibilityFilter,
    notes,
    currentNote,
    firebaseReducer
})

