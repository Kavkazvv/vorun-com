import React, { Component } from 'react';

class StoreLink extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item } = this.props;
        return (
            <a href={item.link}>
                <img src={item.icon} class="responsive"></img>
            </a>
        );
    }
}
export default StoreLink;