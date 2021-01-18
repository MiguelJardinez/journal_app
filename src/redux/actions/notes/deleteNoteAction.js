import {
  BORRAR_NOTA,
  BORRAR_NOTA_EXITO,
  BORRAR_NOTA_ERROR,
} from '../../types';
import {db} from '../../../utils/firebase';

export const deleteNoteAction = id => {
  return async (dispatch, getState) => {
    dispatch(deleteNote(true));
    const noteList = getState().notes.notes;
    const uid = getState().auth.usuario.uid;

    const newNoteList = noteList.filter(note => note.id !== id);
    const pathFirebase = db.doc(`${uid}/journal/notes/${id}`);

    try {
      console.log(`${uid}/journal/notes/${id}`);
      await pathFirebase.delete();
      dispatch(deleteNoteCorrect(newNoteList));
    } catch (error) {
      console.log(error);
      dispatch(deleteNotefail(true));
    }
  }
};

const deleteNote = estado => ({
  type: BORRAR_NOTA,
  payload: estado,
});

const deleteNoteCorrect = data => ({
  type: BORRAR_NOTA_EXITO,
  payload: data,
});

const deleteNotefail = estado => ({
  type: BORRAR_NOTA_ERROR,
  payload: estado,
});