import {
  OBTENER_NOTAS,
  OBTENER_NOTAS_EXITO,
  OBTENER_NOTAS_ERROR,
} from '../../types';
import {db} from '../../../utils/firebase';


export const getNotesActino = (id) => {
  return async dispatch => {
    dispatch(getNotes(true));
    const pathUrlNotes = `/${id}/journal/notes`;
    const noteCollection = db.collection(pathUrlNotes);
    const notes = [];

    try {
      const dataNotes = await noteCollection.get();
      dataNotes.forEach(note => {
        notes.push({
          id: note.id,
          ...note.data(),
        })
      })
      dispatch(getNotasCorrect(notes));
    } catch (error) {
      console.log(error);
    }
  }
};

const getNotes = estado => ({
  type: OBTENER_NOTAS,
  payload: estado,
});

const getNotasCorrect = data => ({
  type: OBTENER_NOTAS_EXITO,
  payload: data,
});