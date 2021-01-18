import React, {useRef} from 'react';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {editNoteAction} from '../../../redux/actions/notes/editNoteAction';
import {uploadFileAction} from '../../../redux/actions/notes/uploadFileAction';

const NotesAppbar = ({dataNote}) => {
  const dispatch = useDispatch();
  const noteList = useSelector(state => state.notes);
  const {activa} = noteList;
  const noteDate = moment(activa.date);
  const inputSelector = useRef(null);


  const handleSaveNote = note => {
    dispatch(editNoteAction(note));
  };
  
  const handleUploadImage = () => {
    inputSelector.current.click();
  };

  const handleSelectFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadFileAction(file));
    }
  }


  return (
    <div className="notes__appbar">
      <span>{noteDate.format('L')}</span>
      <input
        ref={inputSelector}
        style={{display: 'none'}}
        onChange={(e) => handleSelectFile(e)}
        type="file" 
        name="file" 
        id=""/>
      <div className="notes__action">
        <button onClick={handleUploadImage} className="btn">
          Añadir imagen
        </button>
        <button onClick={() => handleSaveNote(dataNote)} className="btn">
          Guardar
        </button>
      </div>
    </div>
  )
}

export default NotesAppbar
