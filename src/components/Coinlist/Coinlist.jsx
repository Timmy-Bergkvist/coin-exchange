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
                { this.props.showBalance ? <th>Balance</th> : null }
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.coinData.map( ({key, name, ticker, price, balance}) => 
                  <Coin key={key} 
                        handleRefresh={this.props.handleRefresh}
                        name={name}
                        ticker={ticker}
                        showBalance={this.props.showBalance}
                        balance={balance}
                        price={price}
                        tickerId={key} />
                )
              }
            </tbody>
          </table>
        )
    }
}
