import {
  DESLOGUEAR_USUARIO,
  DESLOGUEAR_USUARIO_EXITO,
  DESLOGUEAR_USUARIO_ERROR
} from '../../types';
import {firebase} from '../../../utils/firebase';

export const logOutAciton = () => {
  return async dispatch => {
    dispatch(userLogOut(true));
    try {
      await firebase.auth().signOut();
      dispatch(userLogCorrect());
    } catch (error) {
      console.log(error);
      dispatch(userLogFail(true));
    }
  }
}

const userLogOut = estado => ({
  type: DESLOGUEAR_USUARIO,
  payload: estado,
});

const userLogCorrect = () => ({
  type: DESLOGUEAR_USUARIO_EXITO,
});

const userLogFail = estado => ({
  type: DESLOGUEAR_USUARIO_ERROR,
  payload: estado,
});