import React, {useState, useEffect} from 'react';
import NotesAppbar from './NotesAppbar';
import {useSelector, useDispatch} from 'react-redux';
import {deleteNoteAction} from '../../../redux/actions/notes/deleteNoteAction';

const NoteScreen = () => {
  const notesList = useSelector(state => state.notes);
  const dispatch = useDispatch();
  const [dataNote, setDataNotes] = useState({title: '', body: ''});
  const {activa} = notesList;
  const {title, body, id} = activa;

  useEffect(() => {
    if (title !== '') {
      setDataNotes({title, body});
    } else {
      setDataNotes({title: '', body: ''});
    }
  }, [id]);

  const onChangeDataNotes = (e) => {
    setDataNotes({
      ...dataNote,
      [e.target.name]: e.target.value
    })
  };

  const handleDateleNote = (id) => {
    console.log('Eliminar nota', id);
    dispatch(deleteNoteAction(id));
  }

  return (
    <div className="notes__main-content">
      <NotesAppbar dataNote={dataNote} />
      <div className="notes__content">
        <form>
          <input 
            type="text"
            name="title"
            value={dataNote.title}
            onChange={(e) => onChangeDataNotes(e)}
            placeholder="Titulo de nota" 
            className="note__title-input" />
          <textarea 
            value={dataNote.body} 
            name="body"
            onChange={(e) => onChangeDataNotes(e)}
            placeholder="Pon en marcha tus planes" 
            className="notes__text-area" />
        </form>
        <div className="notes__image">
          {
            activa?.url &&
            <img src={activa.url} alt="Imagen" />
          }
        </div>
      </div>
      <button
        onClick={() => handleDateleNote(id)}
      >Eliminar</button>
    </div>
  )
}

export default NoteScreen
