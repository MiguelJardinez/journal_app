import {
  IDENTIFICAR_USUARIO_GOOGLE,
  IDENTIFICAR_USUARIO_GOOGLE_EXITO,
  IDENTIFICAR_USUARIO_GOOGLE_ERROR,
} from '../../types';
import {firebase, googleAuthProvider} from '../../../utils/firebase'

export const loginGoogleAction = () => {
  return async dispatch => {
    dispatch(loginGoogle(true));
    try {
      
      const userCredential = await firebase.auth().signInWithPopup(googleAuthProvider);
      const {displayName, uid} = userCredential.user;
      const usuario = {displayName, uid};
      console.log(usuario);
      dispatch(loginGoogleCorrect(usuario));

    } catch (error) {

      console.log(error);
      dispatch(loginGoogleFail(true));
    }
  }
}

const loginGoogle = estado => ({
  type: IDENTIFICAR_USUARIO_GOOGLE,
  payload: estado,
});

const loginGoogleCorrect = usuario => ({
  type: IDENTIFICAR_USUARIO_GOOGLE_EXITO,
  payload: usuario,
});

const loginGoogleFail = estado => ({
  type: IDENTIFICAR_USUARIO_GOOGLE_ERROR,
  payload: estado,
});