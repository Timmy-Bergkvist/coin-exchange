import React from 'react';
import PropTypes from 'prop-types';
import './coin.css'
import styled from 'styled-components';

const Td = styled.td`
    border-top: 1px solid #cccccc;
    width: 50vh;
`;

export default function coin(props) {

   const handleClickRefresh = (event) => {
       // prevent the default action of submitting the form
       event.preventDefault();
       props.handleRefresh(props.tickerId);
   }

   const handleClickBuy = (event) => {
    event.preventDefault();
    props.handleTransaction(true, props.tickerId);
    }

    const handleClickSell = (event) => {
        event.preventDefault();
        props.handleTransaction(false, props.tickerId);
    }    
   
     
    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            <Td>{ props.max_supply}</Td>
            <Td>{ props.showBalance ? <>{props.balance}</> : "-" }</Td>
            <Td>
                <form action="#" method="POST">
                    <button className="refresh" onClick={handleClickRefresh}>Refresh</button>
                    <button className="buy" onClick={handleClickBuy}>Buy</button>
                    <button className="sell" onClick={handleClickSell}>Sell</button>
                </form>
            </Td>
        </tr>
    );

}

coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    max_supply: PropTypes.number.isRequired
}
