import React, { Component } from 'react';

class StoreLink extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    componentWillUnmount() {}
    componentDidUpdate(prevProps, prevState, snapshot) {}
    render() {
        const { item, className } = this.props;
        if (item.link) {
            return (
                <a href={item.link}>
                    <img src={item.icon} className={className}></img>
                </a>
            );
        } else {
            return (
                <img src={item.icon} className={className}></img>
            );
        }
    }
}
export default StoreLink;