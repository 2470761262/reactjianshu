import React from 'react';
import Header from './common/header';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from "react-router-dom";
import Hemo from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <Provider store={store}>
        <Header />
        <BrowserRouter>
              {/* <Route path="/" exact render={ ()=> <div>hemo</div>}></Route>
              <Route path="/detail" exact render={ ()=> <div>detail</div>}></Route> */}
              <Route path="/" exact component={Hemo}></Route>
              <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
    </Provider> 
  );
}

export default App;
