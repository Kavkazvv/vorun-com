import React, { Component } from 'react';

class StoreLink extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item } = this.props;
        if (item.link) {
            return (
                <a href={item.link}>
                    <img src={item.icon} class="responsive"></img>
                </a>
            );
        } else {
            return (
                <img src={item.icon} class="responsive"></img>
            );
        }
    }
}
export default StoreLink;