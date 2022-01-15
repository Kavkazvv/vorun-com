import React, { Component } from 'react';
import StoreLink from './StoreLink'
import Spacer from './Spacer'

class AppListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { cover, stores, title } = this.props.item;
        const className = "storeBtn" + stores.length;
        return (
            <div>
                <table border="0" width="100%">
                    <tr>
                        <td align="center">
                            <img src={cover} class="cover" />
                        </td>
                    </tr>
                    {(() => {
                        if (title) {
                            return (
                                <tr>
                                    <td align="center" class="title">
                                        {title}
                                    </td>
                                </tr>
                            )
                        }
                        return null;
                    })()}
                    <tr>
                        <td>
                            <table width="100%" border="0">
                                <tr>
                                    {stores.map((item, index) => {
                                        return <td align="center" colspan="3">
                                            <StoreLink item={item} className={className}/>
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