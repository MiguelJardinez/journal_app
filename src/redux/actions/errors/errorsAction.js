import {
  MOSTRAR_ERROR,
  OCULTAR_ERROR,
} from '../../types';

export const errorsAction = mensaje => {
  return dispatch => {
    if (!mensaje) {
      dispatch(hideError(true))
    } else {
      dispatch(showError(mensaje));
    }
  }
};

const showError = mensaje => ({
  type: MOSTRAR_ERROR,
  payload: mensaje,
});

const hideError = estado => ({
  type: OCULTAR_ERROR,
  payload: estado,
});