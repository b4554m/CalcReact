import React, { useState } from 'react';

const Tiers = (props) => {
    return (
        <React.Fragment>
            <p>Target Tier</p>
            <select id="target-tier-select"
                value={props.tier}
                onChange={(e) => {
                    if(props.onChange) {
                        props.onChange(e.target.value);
                    }
                }}>
                <option value="">---</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="70">70</option>
                <option value="75">75</option>
                <option value="80">80</option>
                <option value="90">90</option>
            </select>
        </React.Fragment>
    );
};
export default Tiers;