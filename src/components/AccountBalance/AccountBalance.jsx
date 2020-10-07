
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
        return (
            <Section className="account-balance">
                Balance: <span> ${this.props.amount} </span>
            </Section>
        )
    }
}




AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}