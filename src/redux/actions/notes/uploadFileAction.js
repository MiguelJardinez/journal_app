import {
  SUBIR_ARCHIVO_NOTA,
  SUBIR_ARCHIVO_NOTA_EXITO,
  SUBIR_ARCHIVO_NOTA_ERROR,
} from '../../types';
import axios from 'axios';
import {UPLOAD_FILE_LINK, PRESET_NAME} from '../../../utils/cloudinaryUrl';
import {db} from '../../../utils/firebase';

export const uploadFileAction = (file) => {
  return async (dispatch, getState) => {
    dispatch(uploadFile(true));
    const activeNote = getState().notes.activa;
    const uid = getState().auth.usuario.uid;
  
    const formData = new FormData();
    formData.append('upload_preset', PRESET_NAME);
    formData.append('file', file);

    console.log(activeNote);
    console.log(uid);
    const pathFirebase = `${uid}/journal/notes/${activeNote.id}`;

    try {
      const res = await axios.post(UPLOAD_FILE_LINK, formData);
      const url_file = res.data.secure_url;
      dispatch(uploadFileCorrect(url_file));

      const noteWithImage = {
        title: activeNote.title,
        body: activeNote.body,
        date: new Date.now(),
        url: url_file,
      };
      await db.doc(pathFirebase).update(noteWithImage);
      
    } catch (error) {
      console.log(error);
      dispatch(uploadFileFail(true));
    }
  };
}

const uploadFile = estado => ({
  type: SUBIR_ARCHIVO_NOTA,
  payload: estado,
});

const uploadFileCorrect = url => ({
  type: SUBIR_ARCHIVO_NOTA_EXITO,
  payload: url
});

const uploadFileFail = estado => ({
  type: SUBIR_ARCHIVO_NOTA_ERROR,
  payload: estado,
});