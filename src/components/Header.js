import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <table width="100%" border="0">
                    <tbody>
                        <tr>
                            <td align="center">
                                <img className="header" src="./assets/logo2.png" />
                                <br />
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* <table width="100%" border="0">
                    <tbody>
                        <tr>
                            <td align="right">
                                <a href="https://github.com/vkreal">
                                    <img src="./assets/github.png"
                                        className="badge" />
                                </a>
                            </td>
                            <td align="left">
                                <a href="https://www.linkedin.com/in/vkreal/">
                                    <img src="./assets/linkedin.png"
                                        className="badge" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
        );
    }
}
export default Header;