import React, { Component, Fragment } from 'react';
//css
import './aside.scss'
export default class LayoutHeader extends Component {
    constructor(props) {
        super();
        this.state = {};
    }
    render() {
        return (
            <Fragment >
                <h1 className="logo"><span>Logo</span></h1>
            </Fragment>
        )
    }
}