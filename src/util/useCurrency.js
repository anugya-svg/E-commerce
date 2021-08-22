import CurrencyFormat from "react-currency-format";

import React from 'react'

const UseCurrency=({value}) =>{
    console.log(value)
    return (
        <CurrencyFormat
            value={value}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rs.'}
            renderText={value => <strong>{value}</strong>}
        />
    )
}

export default  UseCurrency
