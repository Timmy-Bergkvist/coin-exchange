import React from 'react';
import PropTypes from 'prop-types';
import './coin.css'
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 50vh;
`;

export default function coin(props) {

   const handleClick = (event) => {
       // prevent the default action of submitting the form
       event.preventDefault();
       props.handleRefresh(props.tickerId);
   }
   
     
    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            <Td>{ props.showBalance ? <>{props.balance}</> : "-" }</Td>
            <Td>
                <form action="#" method="POST">
                    <button className="refresh" onClick={handleClick}>Refresh</button>
                </form>
                <button className="buy" >Buy</button>
                <button className="sell" >Sell</button>
            </Td>
        </tr>
    );

}

coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
