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
          <th>Balance</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.map( ({key, name, ticker, price, balance}) => 
            <Coin key={key} 
                  handleRefresh={props.handleRefresh}
                  name={name}
                  ticker={ticker}
                  showBalance={props.showBalance}
                  balance={balance}
                  price={price}
                  tickerId={key} />
          )
        }
      </tbody>
    </table>
  );
}
