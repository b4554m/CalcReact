import React, { useState } from 'react';
const Discount = (props) => {
    return (
        <React.Fragment>
            <p>Target Discount</p>
            <select id="target-discount-select"
                value={props.discount}
                onChange={(e) => {
                    if(props.onChange)
                        props.onChange(e.target.value);
                }}>
                <option value="">&nbsp;---</option>
                <option value="0">&nbsp; 0%</option>
                <option value="0.20">20%</option>
                <option value="0.25">25%</option>
                <option value="0.30">30%</option>
                <option value="0.40">40%</option>
                <option value="0.50">50%</option>
            </select>
        </React.Fragment>
    );
};
export default Discount;
