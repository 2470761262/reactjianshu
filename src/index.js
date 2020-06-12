import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyled} from './style';
import {GlobalStyled as GlobalStyledIconFont} from './statics/iconfont';
import App from './App.jsx';


ReactDOM.render(
   <Fragment>
     <GlobalStyled/>
     <GlobalStyledIconFont />
     <App/>
   </Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

