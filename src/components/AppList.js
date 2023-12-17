import React, { Component } from 'react';
import AppListItem from './AppListItem';
import Spacer from './Spacer';
import result from '../assets/appList.json'

class AppList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentWillUnmount() {}
    componentDidUpdate(prevProps, prevState, snapshot) {}
    componentDidMount() {
        this.setState({
            isLoaded: true,
            items: result.items
        });
    }
    render() {
        return (
            <div>
                {this.state.items.map(function (item, index) {
                    return <div key={index}><Spacer axis="vertical" size={100} /><AppListItem item={item}/></div>;
                })}
            </div>
        );
    }
}
export default AppList;