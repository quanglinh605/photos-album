import React from 'react';
import Header from './components/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Main from './components/Main';


function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
 
export default App;