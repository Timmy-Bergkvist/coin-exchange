import React, { Component } from 'react';
import Coin from '../coin/coin';
import './Coinlist.css'

export default class Coinlist extends Component {
    render() {
        return (
            <table className="coin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.coinData.map( ({name, ticker, price}) => 
                  <Coin key={ticker} 
                        handleRefresh={this.props.handleRefresh}
                        name={name}
                        ticker={ticker}
                        price={price} />
                )
              }
            </tbody>
          </table>
        )
    }
}
