import {
  AGREGAR_NOTA,
  AGREGAR_NOTA_EXITO,
  AGREGAR_NOTA_ERROR,
  OBTENER_NOTAS,
  OBTENER_NOTAS_EXITO,
  OBTENER_NOTAS_ERROR,
  ACTIVAR_NOTA,
  ACTUALIZAR_NOTA,
  ACTUALIZAR_NOTA_EXITO,
  ACTUALIZAR_NOTA_ERROR,
  DESLOGUEAR_USUARIO_EXITO,
  SUBIR_ARCHIVO_NOTA,
  SUBIR_ARCHIVO_NOTA_EXITO,
  SUBIR_ARCHIVO_NOTA_ERROR,
  BORRAR_NOTA,
  BORRAR_NOTA_ERROR,
  BORRAR_NOTA_EXITO
} from '../../types';

const initialState = {
  notes: [],
  cargando: false,
  error: false,
  mensaje: '',
  activa: null,
  notaActualizada: false, 
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {

  case BORRAR_NOTA:
  case SUBIR_ARCHIVO_NOTA:
  case ACTUALIZAR_NOTA:
  case AGREGAR_NOTA:
  case OBTENER_NOTAS:
    return { 
      ...state, 
      cargando: action.payload,
    }

  case AGREGAR_NOTA_EXITO:
    return {
      ...state,
      cargando: action.payload,
      error: false,
      mensaje: 'Se ha añadido una nota exitosamente',
    }

  case ACTIVAR_NOTA: 
    return {
      ...state,
      activa: {...action.payload},
      cargando: false,
      error: false,
      mensaje: '',
    }

  case BORRAR_NOTA_ERROR:
  case SUBIR_ARCHIVO_NOTA_ERROR:
  case ACTUALIZAR_NOTA_ERROR:
  case AGREGAR_NOTA_ERROR:
  case OBTENER_NOTAS_ERROR:
    return {
      ...state,
      cargando: false,
      error: action.payload,
      mensaje: 'Hubo un problema al añadir la nota',
    }

  case OBTENER_NOTAS_EXITO:
    return {
      ...state,
      cargando: false,
      error: false,
      mensaje: '',
      notes: action.payload,
    }

  case ACTUALIZAR_NOTA_EXITO:
    return {
      ...state,
      activa: {
        ...state.activa,
        title: action.payload.title,
        body: action.payload.body,
      },
      notaActualizada: !state.notaActualizada,
    }

  case DESLOGUEAR_USUARIO_EXITO:
    return{
      notes: [],
      cargando: false,
      error: false,
      mensaje: '',
      activa: null,
      notaActualizada: false, 
    }

  case SUBIR_ARCHIVO_NOTA_EXITO:
    return {
      ...state,
      activa: {
        ...state.activa,
        url: action.payload,
      }
    }

  case BORRAR_NOTA_EXITO:
    return {
      ...state,
      cargando: false,
      error: false,
      activa: null,
      notes: action.payload,
    }

  default:
    return state
  }
}
