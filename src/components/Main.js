import React, { Component } from 'react';
import eth from '../logos/eth.png';
import './App.css';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 col-m-4">
        <div className="col-lg">
          <main role="main" className="col-lg-12 text-center text-white">
            <div className="content mr-auto ml-auto">
              <div id="content" className="mt-3">
                <div className="card mb-4 bg-dark border-info">
                  <div className="card-body">
                    <div>
                      <a
                        href="http://www.inblockdesign.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={eth} width="225" alt="logo" />
                      </a>
                    </div>
                    &nbsp;
                    <p></p>
                    <div
                      className="input-group center-block"
                    >
                      <input
                        id="input"
                        type="number"
                        step="0.01"
                        className="form-control"
                        placeholder="Enter an amount of ETH..."
                        onChange={(e) => this.props.onChange(e.target.value)}
                        required
                      />
                      {/* <div className="input-group-append">
                        <div className="input-group-text">
                          <img src={eth} height="20" alt="" />
                          &nbsp;<b>ETH</b>
                        </div>
                      </div> */}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-info btn-xl"
                      onClick={(event) => {
                        event.preventDefault();
                        //start with digit, digit+dot* or single dot*, end with digit.
                        var reg = new RegExp("^[0-9]*.?[0-9]+$");

                        if (reg.test(this.props.amount)) {
                          const amount = this.props.amount.toString();
                          this.props.makeBet(
                            0,
                            window.web3.utils.toWei(amount)
                          );
                        } else {
                          window.alert(
                            "Please type positive interger or float numbers"
                          );
                        }
                      }}
                    >
                      HEADS
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="submit"
                      className="btn btn-outline-info btn-xl"
                      onClick={(event) => {
                        event.preventDefault();
                        //start with digit, digit+dot* or single dot*, end with digit.
                        var reg = new RegExp("^[0-9]*.?[0-9]+$");

                        if (reg.test(this.props.amount)) {
                          const amount = this.props.amount.toString();
                          this.props.makeBet(
                            1,
                            window.web3.utils.toWei(amount)
                          );
                        } else {
                          window.alert(
                            "Please type positive interger or float number"
                          );
                        }
                      }}
                    >
                      TAILS
                    </button>
                  </div>
                  <div>
                    {!this.props.balance ? (
                      <div
                        id="loader"
                        className="spinner-border"
                        role="status"
                      ></div>
                    ) : (
                      <div className="">
                        <b>MaxBet:</b>{" "}
                        {Number(
                          window.web3.utils.fromWei(
                            this.props.maxBet.toString()
                          )
                        ).toFixed(5)}{" "}
                        <b>ETH</b>
                        <br></br>
                        <b>Balance:</b>{" "}
                        {Number(
                          window.web3.utils.fromWei(
                            this.props.balance.toString()
                          )
                        ).toFixed(5)}{" "}
                        <b>ETH&nbsp;</b>
                        <br />
                        <br />
                        <em className="small-text">
                          Requires ETH and LINK test tokens
                          <a href="https://rinkeby.chain.link/"> Click here</a>
                          .&nbsp;
                        </em>
                        <br />
                        <em className="small-text">
                          Adapted from Dapp University.&nbsp;
                        </em>
                        <br />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;