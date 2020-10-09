
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './accountbalance.css';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {

    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        let content = null;
        if ( this.props.showBalance ) {
            content = <>$ <span> {this.props.amount} </span></>;
        }
        return (
            <Section className="account-balance">
               Balance: { content }
                <button onClick={this.props.handelToggleBalance}>{buttonText}</button>
            </Section>
        )
    }
}




AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}