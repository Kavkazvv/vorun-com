import React, { Component } from 'react';
import AppListItem from './AppListItem'

class AppList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        fetch(location.origin + "/assets/appList.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (
            <div>
                {this.state.items.map(function (item, index) {
                    return <AppListItem item={item}/>;
                })}
            </div>
        );
    }
}
export default AppList;