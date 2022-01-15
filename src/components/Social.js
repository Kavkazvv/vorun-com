import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div>
                <table width="100%" border="0">
                    <tbody>
                        <tr>
                            <td align="center">
                                <div className="fb-like" data-href="http://vorun.com/levelmaker/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Social;