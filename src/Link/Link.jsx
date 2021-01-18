import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomeScreen, Error404} from '../pages';
import AuthRouter from './AuthRouter';
import {firebase} from '../utils/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfoAction} from '../redux/actions/login/getUserInfoAction';
import {getNotesActino} from '../redux/actions/notes/getNotesAction';
import {useHistory} from 'react-router-dom';

const Link = () => {
  const notesList = useSelector(state => state.notes);
  const authList = useSelector(state => state.auth);
  const {usuario} = authList;
  const {notaActualizada} = notesList;
  const history = useHistory();
  const dispatch = useDispatch();
  const [cheking, setCheckoing] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(usuario => {
      dispatch(getUserInfoAction(usuario));
      if (usuario?.uid) {
        setIsLogin(true);
        history.push('/');
      } else {
        setIsLogin(false);
        history.push('/auth/login');
      }
      setCheckoing(false);
    });
  }, []);

  useEffect(() => {
    if (usuario?.uid){
      dispatch(getNotesActino(usuario?.uid));
    }
  }, [isLogin, notaActualizada])

  if (cheking) return null;

  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/auth" component={AuthRouter} />
        <Route component={Error404} />
      </Switch>
    </>
  )
}

export default Link
