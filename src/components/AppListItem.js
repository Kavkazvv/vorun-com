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
                    <tbody>
                        <tr>
                            <td align="center">
                                <img src={cover} className="cover" />
                            </td>
                        </tr>
                        {(() => {
                            if (title) {
                                return (
                                    <tr>
                                        <td align="center" className="title">
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
                                    <tbody>
                                        <tr>
                                            {stores.map((item, index) => {
                                                return <td align="center" colSpan={3} key={index}>
                                                    <StoreLink item={item} className={className} />
                                                </td>
                                            })}
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default AppListItem;