import {
  ACTIVAR_NOTA
} from '../../types';

export const selectNoteAction = nota => {
  return dispatch => {
    dispatch(selectNote(nota));
  }
};

const selectNote = data => ({
  type: ACTIVAR_NOTA,
  payload: data,
});