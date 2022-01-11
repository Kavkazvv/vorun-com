import React, { Component } from 'react';

class StoreLink extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item } = this.props;
        return (
            <a href={item.link}>
                <img src={item.icon} height="100px"></img>
            </a>
        );
    }
}
export default StoreLink;