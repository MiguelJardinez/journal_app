import {combineReducers} from 'redux';
import authReducer from './authReducer/authReducer';
import errorReducer from './errors/errorsReducer';
import noteReducer from './notes/notesReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  notes: noteReducer,
});