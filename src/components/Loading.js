import loading from '../logos/eth.png';
import React, { Component } from 'react';
import eth from '../logos/eth.png';
import './App.css';

class Loading extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 col-lg">
        <div className="col-sm">
          <main role="main" className="col-lg-12 text-center text-white">
            <div className="content mr-auto ml-auto">
              <div id="content" className="mt-3">
                <div className="card mb-4 bg-dark border-danger">
                  <div className="card-body">
                    <div>
                      <a
                        href="http://www.dappuniversity.com/bootcamp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={loading} width="225" alt="logo" />
                      </a>
                    </div>
                    &nbsp;
                    <p></p>
                    <div
                      className="input-group center-block"
                    >
                      <input
                        id="disabledInput"
                        type="text"
                        className="form-control"
                        placeholder="Connecting... please wait..."
                        disabled
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <img src={eth} height="20" alt="" />
                          &nbsp;<b>ETH</b>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info btn-xl"
                      onClick={(event) => {}}
                    >
                      HEADS
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="submit"
                      className="btn btn-info btn-xl"
                      onClick={(event) => {}}
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
                      <div>
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

export default Loading;