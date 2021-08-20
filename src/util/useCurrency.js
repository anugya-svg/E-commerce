import CurrencyFormat from "react-currency-format";

import React from 'react'

function useCurrency({value}) {
    return (
        <CurrencyFormat
            value={value}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹'}
            renderText={value => <strong>{value}</strong>}
        />
    )
}

export { useCurrency}
