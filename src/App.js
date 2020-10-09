import React from 'react';
import Coinlist from './components/Coinlist/Coinlist';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Header from './components/Header/Header';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: rgb(68, 68, 160);
  color: #cccccc;
`;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: false,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5, 
        price: 9999.99
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32.0,
        price: 299
      },
      {
        name: 'Tether',
        ticker: 'USTD',
        balance: 1000,
        price: 1.0
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 0,
        price: 0.2
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 1,
        price: 298.99
      },
    ]
  }
  handelToggleBalance = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }
  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function( values ) {
      let newValues = { ...values };
      if ( valueChangeTicker === values.ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });
      
    this.setState({ coinData: newCoinData });
  }

  render () {
    return (
      <Div className="App">
        <Header />
        <AccountBalance 
          amount={this.state.balance}
          showBalance={this.state.showBalance}
          handelToggleBalance={this.handelToggleBalance} />
        <Coinlist
          coinData={this.state.coinData}
          handleRefresh={this.handleRefresh}
          showBalance={this.state.showBalance} />
      </Div>
    );
  }
}

export default App;
