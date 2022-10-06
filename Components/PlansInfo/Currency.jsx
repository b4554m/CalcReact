import React, { useState } from 'react';

const Currency = (props) => {
    return (
        <React.Fragment>
            <p>Currency</p>
            <select id="currency-select"
                value={props.currency}
                onChange={(e) => {
                    if(props.onChange)
                        props.onChange(e.target.value);
                }}>
                <option value="">&nbsp;&nbsp;---</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>
        </React.Fragment>
    );
};
export default Currency;