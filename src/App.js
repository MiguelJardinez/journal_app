import React from 'react';
import Loader from './components/Loader.jsx';
import Layout from './Layout/Layout.jsx';
import Link from './Link/Link';
import {useSelector} from 'react-redux';


const App = () => {
  const state = useSelector(state => state.auth);

  return (
    <Layout>
      {state.cargando && <Loader />}
      <Link />
    </Layout>
  )
}

export default App
