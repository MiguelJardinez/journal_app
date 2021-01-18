import {
  MOSTRAR_ERROR,
  OCULTAR_ERROR,
} from '../../types';


const initialState = {
  error: false,
  mensaje: '',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {

  case MOSTRAR_ERROR:
    return { 
      ...state, 
      error: true,
      mensaje: action.payload
    }

  case OCULTAR_ERROR:
    return {
      ...state,
      error: action.payload,
      mensaje: '',
    }

  default:
    return state
  }
}
