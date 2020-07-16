import React, { Component } from 'react';
// css
import "./index.scss";

// 组件
import LoginForm from "./LoginForm";//登录页面
export default class Login extends Component {
    constructor(props) {
        super();
        this.state = {};
    }
    // onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };

    render() {
        return (
            <div className="form-warp">
                <div>
                    <LoginForm></LoginForm>
                </div>
            </div>
        )
    }
}