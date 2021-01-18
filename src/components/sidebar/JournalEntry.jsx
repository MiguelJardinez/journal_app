import React from 'react';
import {useDispatch} from 'react-redux';
import {selectNoteAction} from '../../redux/actions/notes/selectNotesAction';
import moment from 'moment';

const JournalEntry = ({entrada}) => {
  const dispatch = useDispatch();
  const {date, body, title, url} = entrada;

  const noteDate = moment(date);

  const selectNotes = entrada => {
    dispatch(selectNoteAction(entrada))
  }

  return (
    <div onClick={() => selectNotes(entrada)} className="journal__entry">

      {
        url &&
        <div className="journal__entry-picture" style={{
          backgroundImage: `url(${url})`
        }}>
        </div>
      }
      <div className="journal__entry-body">
        <p className="journal_title">{title}</p>
        <p className="journal_entry-content">{body}</p>
      </div>
      <div className="journal_entry-date-box">
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('D')}</h4>
      </div>
    </div>
  )
}

export default JournalEntry
