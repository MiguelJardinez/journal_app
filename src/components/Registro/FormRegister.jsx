import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import {emailParttern} from '../../utils/patterns';
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from '../../redux/actions/register/registerAction';

const FormRegister = () => {
  const dispatch = useDispatch();
  const {register, handleSubmit, errors, watch} = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmitUser = (data) => {
    dispatch(registerAction(data));
  }
  return (
    <form onSubmit={handleSubmit(onSubmitUser)}>

      <input
        ref={register({required: true, minLength: 4})}
        autoComplete="off"
        className="auth__input" 
        type="text" 
        placeholder="Nombre"
        name="name" 
        />

      <input
        ref={register({required: true, minLength: 6, pattern: emailParttern})}
        autoComplete="off"
        className="auth__input" 
        type="text" 
        placeholder="Correo electrónico"
        name="email" 
        />

      <input 
        ref={register({required: true})}
        autoComplete="off" 
        className="auth__input" 
        type="password" 
        placeholder="contraseña" 
        name="password" 
      />

      <input 
        ref={register({required: true, minLength: 6, validate: value => value === password.current})}
        autoComplete="off" 
        className="auth__input" 
        type="password" 
        placeholder="Repetir contraseña" 
        name="repeat-password" 
      />

      <button 
        className="btn btn-primary block" 
        type="submit"
      >ingresar</button>
    </form>
  )
}

export default FormRegister
