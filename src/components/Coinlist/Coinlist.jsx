import React from 'react';
import Coin from '../coin/coin';
import './Coinlist.css'

export default function Coinlist(props) {
  return (
      <table className="coin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Max supply</th>
          <th>Balance</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.map( ({key, max_supply, name, ticker, price, balance}) => 
            <Coin key={key} 
                  handleRefresh={props.handleRefresh}
                  name={name}
                  ticker={ticker}
                  showBalance={props.showBalance}
                  handleTransaction={props.handleTransaction}
                  balance={balance}
                  price={price}
                  max_supply={max_supply}
                  tickerId={key} />
          )
        }
      </tbody>
    </table>
  );
}
