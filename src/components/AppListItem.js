import React, { Component } from 'react';

class AppListItem extends Component {
    constructor(props) {
        super(props);
        console.log(props.item)
    }
    render() {
        const {cover} = this.props.item;
        return (
            <div>
                <img src={cover} />
            </div>
        );
    }
}
export default AppListItem;