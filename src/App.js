import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
          <Route exact component={Login} path='/' />  {/* 登录组件 */}
          <PrivateRouter exact component={Index} path='/index' /> {/* 主页组件 */}
          <PrivateRouter exact component={Index} path='/index/user' />  {/* 员工管理组件 */}
          <PrivateRouter exact component={Index} path='/index/pros/list' /> {/* 产品列表组件 */}
          <PrivateRouter exact component={Index} path='/index/pros/items' />  {/* 项目列表组件 */}
          <PrivateRouter exact component={Index} path='/index/orders/order' />  {/* 订单列表组件 */}
          <PrivateRouter exact component={Index} path='/index/orders/insertorder' />  {/* 增加订单组件 */}
          <PrivateRouter exact component={Index} path='/index/orders/ordersearch' />  {/* 订单查询组件 */} 
        </Switch>
      </BrowserRouter>
    );
  }
}
