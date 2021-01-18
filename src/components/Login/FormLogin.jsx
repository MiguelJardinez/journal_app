import React from 'react';
import {useForm} from 'react-hook-form';
import {emailParttern} from '../../utils/patterns';
import {useDispatch} from 'react-redux';
import {loginUserAction} from '../../redux/actions/login/loginUserAction';

const FormLogin = () => {
  const dispatch = useDispatch();
  const {register, handleSubmit, errors} = useForm();

  const loginSubmit = (data) => {
    dispatch(loginUserAction(data));
  }

  return (
    <form onSubmit={handleSubmit(loginSubmit)}>
      <input 
        autoComplete="off" 
        ref={register({required: true, pattern: emailParttern, validate: true})}
        className="auth__input" 
        type="text" 
        placeholder="Correo electrónico"
        name="email" 
        />

      <input 
        autoComplete="off"
        ref={register({required: true, minLength: 6})}
        className="auth__input" 
        type="text" 
        placeholder="contraseña" 
        name="password" 
      />

      <button 
        className="btn btn-primary block" 
        type="submit"
      >ingresar</button>
    </form>
  )
}

export default FormLogin
