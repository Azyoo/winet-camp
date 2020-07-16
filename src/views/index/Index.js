import React, { Component } from 'react';
// layout组件
import LayoutAside from './components/aside';
import LayoutHeader from './components/header';
import ContainerMain from '../../components/AsideMenu/containerMain';
//css
import "./layout.scss";
// Antd
import { Layout } from 'antd';

const { Sider, Header, Content } = Layout;

export default class Index extends Component {
    constructor(props) {
        super();
        this.state = {};
    }
    render() {
        return (
            <Layout className="layout-wrap">
                <Header className="layout-head"><LayoutHeader /></Header>
                <Layout>
                    <Sider width="250px"><LayoutAside></LayoutAside></Sider>
                    <Content className="layout-main">
                        <ContainerMain />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}