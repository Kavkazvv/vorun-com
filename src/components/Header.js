import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <table width="100%" border="0">
                    <tr>
                        <td align="center">
                            <img class="header" src="./assets/logo.png" />
                            <br />
                        </td>
                    </tr>
                </table>
                <table width="100%" border="0">
                    <tr>
                        <td align="right">
                            <a href="https://github.com/vkreal">
                                <img src="./assets/github.png"
                                    class="badge" />
                            </a>
                        </td>
                        <td align="left">
                            <a href="https://www.linkedin.com/in/vkreal/">
                                <img src="./assets/linkedin.png"
                                    class="badge" />
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default Header;