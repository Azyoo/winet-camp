import React, { Component, Fragment } from 'react';
// icon
import { MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
//css
import './aside.scss'
export default class LayoutHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            collapsed: props.collapsed
        };
    }
    //生命周期监听父级props的值变化
    componentWillReceiveProps({ collapsed }) {
        this.setState({
            collapsed
        })
    }
    toggleMenu = () => {
        this.props.toggle();
    }

    render() {
        const { collapsed } = this.state;
        return (
            <div className={collapsed ? "collapsed-close" : ""}>
                <h1 className="logo"><span>Logo11</span></h1>
                <div className="header-wrap"><span className="collapsed-icon" onClick={this.toggleMenu}>{this.state.collapsed? <MenuUnfoldOutlined />:<MenuFoldOutlined />}</span></div>
            </div>
        )
    }
}