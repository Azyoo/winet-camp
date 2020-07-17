import React, { Component } from 'react';
// layout组件
import LayoutAside from './components/aside';
import LayoutHeader from './components/header';
import ContainerMain from '../../components/containerMain/containerMain';
//css
import "./layout.scss";
// Antd
import { Layout } from 'antd';

const { Sider, Header, Content } = Layout;

export default class Index extends Component {
    constructor(props) {
        super();
        this.state = {
            collapsed: false
        };
    }
    componentDidMount = () => {
        const collapsed = JSON.parse(sessionStorage.getItem("collapsed"));
        this.setState({
            collapsed
        })
    }
    toggleCollapsed = () => {
        const collapsed = !this.state.collapsed;
        this.setState({
            collapsed
        })
        sessionStorage.setItem("collapsed", collapsed)
    }
    render() {
        return (
            <Layout className="layout-wrap">
                <Header className="layout-head"><LayoutHeader toggle={this.toggleCollapsed} collapsed={this.state.collapsed} /></Header>
                <Layout>
                    <Sider width="250px" collapsed={this.state.collapsed}><LayoutAside></LayoutAside></Sider>
                    <Content className="layout-main">
                        <ContainerMain />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}