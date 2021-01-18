import React from 'react';
import {Link} from 'react-router-dom';
import FormRegister from '../components/Registro/FormRegister';

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Registro</h3>
        <FormRegister />
      <Link className="link" to={"/auth/login"}>¿Tienes una cuenta?</Link>
    </>
  )
}

export default RegisterScreen
