import React, { useState } from 'react';

const Plans = (props) => {
    return (
        <React.Fragment>
            <p>Plan</p>
            <select id="target-plan-select"
                value={props.plan}
                onChange={(e) => {
                    if(props.onChange)
                        props.onChange(e.target.value);
                }}>
                <option value="">&nbsp;&nbsp;&nbsp;---</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="family">Family</option>
            </select>
        </React.Fragment>
    );
};
export default Plans;