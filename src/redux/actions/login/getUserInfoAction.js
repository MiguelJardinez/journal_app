import {
  OBTENER_USUARIO,
  OBTENER_USUARIO_EXITO,
  OBTENER_USUARIO_ERROR
} from '../../types';

export const getUserInfoAction = data => {
  return dispatch => {
    dispatch(getUSer(true));

      if (data?.uid) {
        const {displayName, uid} = data;
        const usuario = {displayName, uid};
        dispatch(getUserCorrect(usuario));
      } else {
        dispatch(getUserFail(true));
      }
  }
}

const getUSer = estado => ({
  type: OBTENER_USUARIO,
  payload: estado,
});

const getUserCorrect = usuario => ({
  type: OBTENER_USUARIO_EXITO,
  payload: usuario,
});

const getUserFail = estado => ({
  type: OBTENER_USUARIO_ERROR,
  payload: estado,
});