import React, { Component } from 'react';
import logo from '../logos/inblocklogo.png';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.inblockdesign.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={logo} height="32" alt="logo" />
          Inblock Design
        </a>
        {!this.props.account ? <div id="loader" className="spinner-border text-light" role="status"></div> :
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <a
              className="text-white"
              href={"https://rinkeby.etherscan.io/address/" + this.props.account}
              target="_blank"
              rel="noopener noreferrer"
            >
              {(this.props.account)}
            </a>&nbsp;
          </li>
        }
      </nav>
    );
  }
}

export default Navbar;