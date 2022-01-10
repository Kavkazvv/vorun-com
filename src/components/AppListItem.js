import React, { Component } from 'react';

class AppListItem extends Component {
    constructor(props) {
        super(props);
        console.log(props.item)
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
                        <table width="100%" border="1">
                            <tr>
                                {stores.map((item, index) => {
                                    return <td>1</td>
                                })}
                            </tr>
                        </table>
                    </tr>
                </table>
            </div>
        );
    }
}
export default AppListItem;