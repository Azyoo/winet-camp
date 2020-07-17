import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
//组件引用
import Login from './views/login/index';
import Index from './views/index/Index';
import Prolist from '../src/views/product/prolist';
//私有组件
import PrivateRouter from '../src/components/privateRouter/privateRouter';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={Login} path='/'/>
          <PrivateRouter exact component={Index} path='/index'/>
          <PrivateRouter exact component={Index} path='/index/pros/list'/>
          <PrivateRouter exact component={Index} path='/index/pros/items'/>
          <PrivateRouter exact component={Index} path='/index/orders/order'/>
          <PrivateRouter exact component={Index} path='/index/orders/insertorder'/>
          <PrivateRouter exact component={Index} path='/index/orders/ordersearch'/>
        </Switch>
      </BrowserRouter>
    );
  }
}
