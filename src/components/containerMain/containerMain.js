import React from 'react';
import {  Switch,Route } from 'react-router-dom';
//组件
import User from '../../views/user/user';
import Prolist from '../../views/product/prolist';
import Pritems from '../../views/product/proitems';
//import Pritems from '../../views/product/proitems';
// 私有路由组件
import PrivateRouter from '../privateRouter/privateRouter';
export default class ContainerMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Switch>
                <PrivateRouter exact path='/index/pros/list' component={Prolist}  />
                <PrivateRouter exact path='/index/pros/items' component={Pritems} />
                <PrivateRouter exact path='/index' component={User} />
                {/* <PrivateRouter exact component={Pritems} path='/index/pros/items' /> */}
            </Switch>
        );
    }
}
