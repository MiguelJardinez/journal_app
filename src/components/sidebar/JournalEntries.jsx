import React from 'react';
import JournalEntry from './JournalEntry';
import {useSelector} from 'react-redux';


const JournalEntries = () => {
  const noteList = useSelector(state => state.notes);
  const {notes} = noteList;
  if (notes.length === 0) return null;

  return (
    <div className="journal__entries">
      {notes.map(entrada => (
        <JournalEntry key={entrada.id} entrada={entrada} />
      ))}
    </div>
  )
}

export default JournalEntries
