import {
  REGISTRAR_USUARIO,
  REGISTRAR_USUARIO_EXITO,
  REGISTRAR_USUARIO_ERROR,
  IDENTIFICAR_USUARIO,
  IDENTIFICAR_USUARIO_EXITO,
  IDENTIFICAR_USUARIO_ERROR,
  DESLOGUEAR_USUARIO,
  DESLOGUEAR_USUARIO_EXITO,
  DESLOGUEAR_USUARIO_ERROR,
  IDENTIFICAR_USUARIO_GOOGLE,
  IDENTIFICAR_USUARIO_GOOGLE_EXITO,
  IDENTIFICAR_USUARIO_GOOGLE_ERROR,
  OBTENER_USUARIO,
  OBTENER_USUARIO_EXITO,
  OBTENER_USUARIO_ERROR
} from '../../types';

const initialState = {
  usuario: {
    uid: '',
    nombre: '',
  },
  cargando: false,
  error: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {

  case IDENTIFICAR_USUARIO_GOOGLE:
  case REGISTRAR_USUARIO:
  case IDENTIFICAR_USUARIO:
  case DESLOGUEAR_USUARIO:
  case OBTENER_USUARIO:
    return { 
      ...state, 
      cargando: action.payload,
      error: false,
    }

  
  case REGISTRAR_USUARIO_EXITO:
  case IDENTIFICAR_USUARIO_GOOGLE_EXITO:
  case IDENTIFICAR_USUARIO_EXITO:
  case OBTENER_USUARIO_EXITO:
    return {
      ...state,
      usuario: {...action.payload},
      cargando: false,
      error: false,
    }

  case OBTENER_USUARIO_ERROR:
  case IDENTIFICAR_USUARIO_GOOGLE_ERROR:
  case REGISTRAR_USUARIO_ERROR:
  case IDENTIFICAR_USUARIO_ERROR:
  case DESLOGUEAR_USUARIO_ERROR:
    return { 
      ...state, 
      cargando: false,
      error: action.payload,
    }

  case DESLOGUEAR_USUARIO_EXITO:
    return {
      usuario: {
        uid: '',
        nombre: '',
      },
      cargando: false,
      error: false,
    }

  default:
    return state
  }
}
