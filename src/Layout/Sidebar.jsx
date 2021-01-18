import React from 'react';
import JournalEntries from '../components/sidebar/JournalEntries';
import {logOutAciton} from '../redux/actions/logOut/logOut';
import {useSelector, useDispatch} from 'react-redux';
import {addNotesAction} from '../redux/actions/notes/addNotesActions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const {usuario} = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logOutAciton());
  }

  const handleNewEntry = () => {
    dispatch(addNotesAction());
  }

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3>
          <i className="far fa-moon"></i>
          <span>{usuario.displayName}</span>
        </h3>
        <div 
          onClick={handleNewEntry}
          className="journal__new-entry">
          <i className="far fa-calendar-plus"></i>
          <p>Nueva entrada</p>
        </div>
        <JournalEntries />
      </div>
      <button
        onClick={handleLogout} 
        className="btn btn-primary"
      >Salir de cuenta</button>
    </aside>
  )
}

export default Sidebar
