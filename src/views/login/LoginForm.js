import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
// Antd
import { Form, Input, Button } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
// API
//import { login, getSalepoint } from '../../api/account';
// 方法
import { setToken } from '../../utils/session';
//const { Option } = Select;
export default withRouter(class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            salepoint: []
        };
    }
    onFinish = (values) => {
        // login(values).then(res => {
        //     if (res.data.userdata && res.data.userdata.code === 200) {
        //         const data = res.data.userdata
        //         //储存token
        //         setToken(data.code);
        //         //路由跳转
        //         this.props.history.push('/index');
        //     } else {
        //         const data = res.data.userdata
        //         //储存token
        //         setToken(data.code);
        //         alert(res.data.userdata.msg);
        //     }
        // })
        //     .catch(err => {
        //         console.log(err, "err1");
        //     })
        setToken('abcd');
        this.props.history.push('/index');
        console.log('Received values of form: ', values);
    };
    // componentWillMount = () => {
    //     getSalepoint().then(res => {
    //         this.setState({
    //             salepoint: res.data
    //         }, () => {
    //         })
    //     }).catch(err => {
    //         console.log(err, "err");
    //     })
    // }

    render() {
        return (
            <Fragment >
                <div className="title_name">
                    <span>万龙冬夏令营后台管理系统</span>
                </div>
                <div className="title_info">
                    <span>账户密码登录</span>
                </div>
                <div className="link-top">
                </div>
                <div className="form-header">
                    <span className="column">登录</span>
                </div>
                <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish}>
                    <Form.Item name="name" rules={[{ required: true, message: '请输入用户名!' }]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item name="pws" rules={[{ required: true, message: '请输入密码!' }]}>
                        <Input prefix={<UnlockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
                    </Form.Item>
                    {/* <Form.Item name="salepoint" label="销售点选择" hasFeedback rules={[{ required: true, message: '选择销售点!' }]}>
                            <Select placeholder="选择销售点"  >
                                {
                                    this.state.salepoint.map((el, index) => {
                                        return <Option key={el._id} name={el.name} >{el.name}</Option>
                                    })
                                }
                            </Select>
                    </Form.Item> */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
                    </Form.Item>
                </Form>
            </Fragment>
        )
    }
})