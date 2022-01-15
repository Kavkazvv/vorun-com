import React, { Component } from 'react';

class StoreLink extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item, className } = this.props;
        if (item.link) {
            return (
                <a href={item.link}>
                    <img src={item.icon} class={className}></img>
                </a>
            );
        } else {
            return (
                <img src={item.icon} class={className}></img>
            );
        }
    }
}
export default StoreLink;