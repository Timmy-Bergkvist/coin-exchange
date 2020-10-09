import React, { Component } from 'react';
import logo from './logo.png';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
            <img src={logo} alt="react logo" className="App-logo" />
            <h1 className="app-title">
              Coin Exchange
            </h1>
          </header>
        )
    }
}
