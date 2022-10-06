import Plans from './Plans';
import Discount from './Discount';
import Currency from './Currency';
import Tiers from './Tiers';
import {useState} from 'react';

function PlanParameters(props) {
    return(
        <div>
            <h4>{props.heading}</h4>
            <div>{props.actionButtons}</div>
            <Tiers tier={props.parameters.tier} onChange={tier => {
                if(props.onChange) {
                    props.onChange({
                        ...props.parameters,
                        tier: tier
                    });
                }
            }} />
            <Plans plan={props.parameters.plan} onChange={plan => {
                if(props.onChange) {
                    props.onChange({
                        ...props.parameters,
                        plan: plan
                    });
                }
            }} />
            <Discount discount={props.parameters.discount} onChange={discount => {
                if(props.onChange) {
                    props.onChange({
                        ...props.parameters,
                        discount: discount
                    });
                }
            }} />
        </div>
    );
};

export default PlanParameters;