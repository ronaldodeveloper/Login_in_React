import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/login/Login.jsx'


function App(){
  return (
  <>
     <Login />
  </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

