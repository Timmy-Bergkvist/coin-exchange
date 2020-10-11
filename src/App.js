import React from 'react';
import Coinlist from './components/Coinlist/Coinlist';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Header from './components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: rgb(68, 68, 160);
  color: #cccccc;
`;

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(4));

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: false,
    coinData: [
      /*
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
      */
    ]
  }

  componentDidMount = async () => {
  const response = await axios.get('https://api.coinpaprika.com/v1/coins');
  const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
  const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
  const promises = coinIds.map(id => axios.get(tickerUrl + id));
  const coinData = await Promise.all(promises)
  const coinPriceData = coinData.map(function(response){
    const coin = response.data;
    return {
      key: coin.id,
      name: coin.name,
      ticker: coin.symbol,
      balance: 0,
      price: formatPrice(coin.quotes.USD.price),
    };
  })
  // Retrive the prices
  this.setState({ coinData: coinPriceData });
  }

  handelToggleBalance = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }

  handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = this.state.coinData.map( function( values ) {
      let newValues = { ...values };
      if ( valueChangeId === values.key ) {
        newValues.price = newPrice;
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
