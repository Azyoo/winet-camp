import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
// icon
import { UserOutlined } from '@ant-design/icons';
// antd
import { Menu } from 'antd';
// 路由
import Router from "../../routes/route";
const { SubMenu } = Menu;

export default withRouter(class withRouterAsideMenu extends Component {
    constructor(props) {
        super();
        this.state = {
            selectedKeys: [],
            openKeys: []
        };
        console.log(Router)
    }
    //生命周期
    componentDidMount() {
        const pathName = this.props.location.pathname;
        const MenuKey = pathName.split('/').slice(0, 3).join('/');
        const menuHigh = {
            selectedKeys: pathName,
            openKeys: MenuKey
        }
        this.selectMenuHigh(menuHigh);
    }
    //无子级菜单处理
    renderMenu = ({ title, key }) => {
        return (
            <Menu.Item key={key} icon={<UserOutlined />}>
                <Link to={key} ><span>{title}</span></Link>
            </Menu.Item>
        )
    }
    //子级菜单处理 
    renderSubMenu = ({ title, key, child }) => {
        return (
            <SubMenu key={key} icon={<UserOutlined />} title={title}>
                {
                    child && child.map(item => {
                        return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item);
                    })
                }
            </SubMenu>
        )
    }
    //选中菜单
    selectMenu = ({ item, key, keyPath, domEvent }) => {
        const menuHig = {
            selectedKeys: key,
            openKeys: keyPath[keyPath.length - 1] //数组的最后一项
        }
        this.selectMenuHigh(menuHig);
    }
    //菜单高光
    selectMenuHigh = ({ selectedKeys, openKeys }) => {
        this.setState({
            selectedKeys: [selectedKeys],
            openKeys: [openKeys]
        })
    }
    //打开菜单
    openMenu = (openKeys) => {
        this.setState({
            openKeys: [openKeys[openKeys.length - 1]]
        })
    }
    render() {
        const { selectedKeys, openKeys } = this.state;
        return (
            <Fragment>

                <Menu
                    triggerSubMenuAction='hover'
                    onOpenChange={this.openMenu}
                    onClick={this.selectMenu}
                    theme="dark"
                    mode="inline"
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {
                        Router && Router.map(firstItem => {
                            return firstItem.child && firstItem.child.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem);
                        })
                    }

                </Menu>
            </Fragment>
        )
    }
})