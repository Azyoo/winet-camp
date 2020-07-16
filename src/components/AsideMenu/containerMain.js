import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
//组件
import User from '../../views/user/user';
export default class ContainerMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <Switch>
            {/* <Route path='/index' component={User} ></Route> */}
        </Switch>
    );
  }
}
