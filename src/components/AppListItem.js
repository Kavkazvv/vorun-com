import React, { Component } from 'react';

class AppListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { cover, stores } = this.props.item;
        return (
            <div>
                <table align="center">
                    <tr>
                        <td>
                            <img src={cover} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table width="100%" border="1">
                                <tr>
                                    {stores.map((item, index) => {
                                        return <td align="center">
                                            <a href={item.link}>
                                                <img src={item.icon} height="100px"></img>
                                            </a>
                                        </td>
                                    })}
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default AppListItem;