import {
  REGISTRAR_USUARIO,
  REGISTRAR_USUARIO_EXITO,
  REGISTRAR_USUARIO_ERROR
} from '../../types';
import {firebase} from '../../../utils/firebase';

export const registerAction = data => {
  return async dispatch => {
    dispatch(registerUser(true));

    try {
      const dataUser = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
      await dataUser.user.updateProfile({displayName: data.name});
      const {displayName, uid} = dataUser.user;
      const usuario = {
        uid,
        displayName,
      }
      dispatch(registerUserCorrect(usuario));
    } catch (error) {
      console.log(error);
      dispatch(registerUseFail(true));
    }
  }
}

const registerUser = estado => ({
  type: REGISTRAR_USUARIO,
  payload: estado,
});

const registerUserCorrect = usuario => ({
  type: REGISTRAR_USUARIO_EXITO,
  payload: usuario
});

const registerUseFail = estado => ({
  type: REGISTRAR_USUARIO_ERROR,
  payload: estado,
});