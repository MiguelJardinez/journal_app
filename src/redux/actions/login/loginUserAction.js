import {
  IDENTIFICAR_USUARIO,
  IDENTIFICAR_USUARIO_EXITO,
  IDENTIFICAR_USUARIO_ERROR,
} from '../../types';
import {firebase} from '../../../utils/firebase';

export const loginUserAction = (data) => {
  return async dispatch => {
    dispatch(loginUser(true));
    
    console.table(data);
    try {
      const userCredentials = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      console.log(userCredentials);
      const {displayName, uid} = userCredentials.user;
      const usuario = {
        displayName,
        uid,
      }
      dispatch(loginUserCorrect(usuario));
    } catch (error) {
      console.log(error);
      dispatch(loginUserfail(true));
    }
  }
}

const loginUser = estado => ({
  type: IDENTIFICAR_USUARIO,
  payload: estado,
});

const loginUserCorrect = usuario => ({
  type: IDENTIFICAR_USUARIO_EXITO,
  payload: usuario,
});

const loginUserfail = estado => ({
  type: IDENTIFICAR_USUARIO_ERROR,
  payload: estado,
});