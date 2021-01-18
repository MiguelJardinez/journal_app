import React from 'react';
import {Link} from 'react-router-dom';
import FormLogin from '../components/Login/FormLogin';
import {useDispatch} from 'react-redux';
import {loginGoogleAction} from '../redux/actions/login/loginGoogleAction';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleGoogleLogin = () => {
    dispatch(loginGoogleAction());
  }
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <FormLogin />

      <div className="auth__social-network">
        <p>Ingresa con redes sociales</p>
        <div
          onClick={handleGoogleLogin} 
          className="google-btn"
        >
          <div className="google-icon-wrapper">
            <img 
              className="google-icon" 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="google button" />
          </div>
          <div className="text-wrapper">
            <p className="btn-text">Sign in with google</p>
          </div>
        </div>
      </div>
      <Link className="link" to={"/auth/registro"}>Crear nueva cuenta</Link>
    </>
  )
}

export default LoginScreen
