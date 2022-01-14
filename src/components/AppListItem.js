import React, { Component } from 'react';
import StoreLink from './StoreLink'
import Spacer from './Spacer'

class AppListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { cover, stores } = this.props.item;
        return (
            <div>
                <table border="0" width="100%">
                    <tr>
                        <td align="center">
                            <img src={cover} class="responsive"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table width="100%" border="0">
                                <tr>
                                    {stores.map((item, index) => {
                                        return <td align="center" colspan="3">
                                            <StoreLink item={item} />
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