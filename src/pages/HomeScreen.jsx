import React from 'react';
import BlankState from '../components/Home/BlankState';
import NoteScreen from '../components/Home/notes/NoteScreen';
import Sidebar from '../Layout/Sidebar';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const notes = useSelector(state => state.notes);
  const {activa} = notes;

  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {
          !activa 
          ? (<BlankState />)
          : (<NoteScreen />)
        }
      </main>
    </div>
  )
}

export default HomeScreen
