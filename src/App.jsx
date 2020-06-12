import React from 'react';
import Header from './common/header';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Hemo from './pages/home';
import Detail from './pages/detail';
import NoFind from './pages/noFind';

class App extends React.Component {

    constructor(props){
        super(props)
        this.state={
            gogo : <div>gogo我开兴</div>
        }
    }

    handleClick = ()=>{
        //使用router的render 这样就有点像vue的component动态组件
        this.setState(()=>{
            return {
                gogo : <ul>
                            <li>谢谢哈</li>
                            <li>你可以的</li>
                         </ul>
            }
        })
    }


    render(){
        let { gogo } = this.state;
        return (
          <Provider store={store}>
              <Header />
              <BrowserRouter>
                    {/* <Route path="/" exact render={ ()=> <div>hemo</div>}></Route>
                    <Route path="/detail" exact render={ ()=> <div>detail</div>}></Route> */}
                    <Switch>
                      <Route path="/" exact component={Hemo}></Route>
                      <Route path="/detail" exact component={Detail}></Route>
                      <Route path="/detailgg" exact render={()=> gogo}></Route>
                      <Route component={NoFind}></Route>
                    </Switch>
              </BrowserRouter>处理
              <button onClick={this.handleClick}>切换</button>
          </Provider> 
        );
    }
}

export default App;
