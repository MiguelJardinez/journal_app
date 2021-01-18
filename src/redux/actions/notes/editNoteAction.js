import {
  ACTUALIZAR_NOTA,
  ACTUALIZAR_NOTA_EXITO,
  ACTUALIZAR_NOTA_ERROR,
} from '../../types';
import {db} from '../../../utils/firebase';


export const editNoteAction = data => {
  return async (dispatch, getState) => {
    dispatch(editNote(true));
    try {
      const {auth, notes} = getState();
      const {uid} = auth.usuario;
      const {activa} = notes;
      const noteToFirebase = {
        title: data.title,
        body: data.body,
        date: activa.date
      }
      const pathFirebase = `${uid}/journal/notes/${notes.activa.id}`;
      await db.doc(pathFirebase).update(noteToFirebase);
      dispatch(editNoteSuccess(data));

    } catch (error) {
      console.log(error);
      dispatch(editNoteFail(true));
    }
  }
};

const editNote = estado => ({
  type: ACTUALIZAR_NOTA,
  payload: estado,
});

const editNoteSuccess = data => ({
  type: ACTUALIZAR_NOTA_EXITO,
  payload: data,
});

const editNoteFail = estado => ({
  type: ACTUALIZAR_NOTA_ERROR,
  payload: estado,
});