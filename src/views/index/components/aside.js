import React, { Component, Fragment } from 'react';
// asideMenu
import AsideMenu from '../../../components/AsideMenu/index';

export default class Aside extends Component {
    constructor(props) {
        super();
        this.state = {};
    }
    render() {
        return (
            <Fragment>
                <AsideMenu />
            </Fragment>
        )
    }
}