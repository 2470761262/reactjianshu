import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyled} from './style.js';
import App from './App';


ReactDOM.render(
   <Fragment>
     <GlobalStyled/>
     <App/>
   </Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

