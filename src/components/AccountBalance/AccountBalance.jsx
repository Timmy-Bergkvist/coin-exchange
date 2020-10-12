
import React from 'react';
import PropTypes from 'prop-types';
import './accountbalance.css';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default function AccountBalance(props) {
    
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if ( props.showBalance ) {
        content = <>$ <span> {props.amount} </span></>;
    }

    return (
        <Section className="account-balance">
            Balance: { content }
            <button onClick={props.handelToggleBalance}>{buttonText}</button>
        </Section>
    );
}




AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}