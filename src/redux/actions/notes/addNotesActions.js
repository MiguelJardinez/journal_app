import {
  AGREGAR_NOTA,
  AGREGAR_NOTA_EXITO,
  AGREGAR_NOTA_ERROR,
  ACTIVAR_NOTA,
} from '../../types';
import {db} from '../../../utils/firebase';

export const addNotesAction = data => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth.usuario;
    dispatch(addNote(true));

    //Esqueleto de la nota
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const pathNotas = db.collection(`${uid}/journal/notes`);

    try {
      const docRef = await pathNotas.add(newNote);
      const {id} = docRef;
      const data = {id, ...newNote};
      dispatch(addNoteCorrect(true));
      dispatch(activeNote(data));

    } catch (error) {
      console.log(error);
      dispatch(addNoteFail(true));

    }

  }
};

const addNote = estado => ({
  type: AGREGAR_NOTA,
  payload: estado,
});

const addNoteCorrect = estado => ({
  type: AGREGAR_NOTA_EXITO,
  payload: estado,
});

const addNoteFail = estado => ({
  type: AGREGAR_NOTA_ERROR,
  payload: estado,
});

const activeNote = (data) => ({
  type: ACTIVAR_NOTA,
  payload: data,
});
