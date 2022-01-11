import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div>
                <table align="center">
                    <tr>
                        <td align="center">
                            <div class="fb-like" data-href="http://vorun.com/levelmaker/" data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
                        </td>
                        <td><a href="https://twitter.com/vkreal?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @vkreal</a></td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default Social;