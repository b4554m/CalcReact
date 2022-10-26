import React, { useState, useRef } from 'react';
import Currency from './PlansInfo/Currency';
import PlanParameters from './PlansInfo/PlanParameters';
import { Container, Row, Col } from 'react-bootstrap';
// import TIERS from './MainPage';


const CalcCompanion = () => {


    const [currency, setCurrency] = useState('');

    const [newPlanParameters, setNewPlanParameters] = useState({});

    const [oldPlanParams, setOldPlanParams] = useState([]);

    //Calculation Logic!
    const TIERS = useRef(
        {
            35: {
                "single": {
                    USD: 34.95,
                    EUR: 34.95,
                    GBP: 29.95
                },
                "double": {
                    USD: 54.95,
                    EUR: 54.95,
                    GBP: 49.95
                },
                "family": {
                    USD: 79.95,
                    EUR: 79.95,
                    GBP: 69.95
                },
            },
            40: {
                "single": {
                    USD: 39.95,
                    EUR: 39.95,
                    GBP: 34.95
                },
                "double": {
                    USD: 59.95,
                    EUR: 59.95,
                    GBP: 51.95
                },
                "family": {
                    USD: 89.95,
                    EUR: 89.95,
                    GBP: 74.95
                },
            },
            30: {
                "single": {
                    USD: 29.95,
                    EUR: 29.95,
                    GBP: 25.95
                },
                "double": {
                    USD: 44.95,
                    EUR: 44.95,
                    GBP: 39.95
                },
                "family": {
                    USD: 69.95,
                    EUR: 69.95,
                    GBP: 61.95
                },
            },
            70: {
                "single": {
                    USD: 69.95,
                    EUR: 69.95,
                    GBP: 59.95
                },
                "double": {
                    USD: 104.95,
                    EUR: 104.95,
                    GBP: 84.95
                },
                "family": {
                    USD: 154.95,
                    EUR: 154.95,
                    GBP: 124.95
                },
            },
            75: {
                "single": {
                    USD: 74.95,
                    EUR: 74.95,
                    GBP: 64.95
                },
                "double": {
                    USD: 114.95,
                    EUR: 114.95,
                    GBP: 99.95
                },
                "family": {
                    USD: 164.95,
                    EUR: 164.95,
                    GBP: 139.95
                },
            },
            80:
            {
                "single":
                {
                    USD: 79.95,
                    EUR: 79.95,
                    GBP: 69.95
                },
                "double": {
                    USD: 119.95,
                    EUR: 119.95,
                    GBP: 104.95
                },
                "family": {
                    USD: 179.95,
                    EUR: 179.95,
                    GBP: 154.95
                },
            },
            90: {
                "single": {
                    USD: 89.95,
                    EUR: 89.95,
                    GBP: 76.95
                },
                "double": {
                    USD: 134.95,
                    EUR: 134.95,
                    GBP: 115.95
                },
                "family": {
                    USD: 199.95,
                    EUR: 199.95,
                    GBP: 167.95
                },
            }
        }
    );



    const calculateDifference = () => {
        let oldPrices = 0;
        let newPrice = 0;
        //calculate the total price of all old plans
        for (let i = 0; i < oldPlanParams.length; i++) {
            let selectedOldPrice = TIERS.current[oldPlanParams[i].tier][oldPlanParams[i].plan][currency];
            oldPrices = oldPrices + (selectedOldPrice - selectedOldPrice * oldPlanParams[i].discount);
        }

        let selectedNewPrice = TIERS.current[newPlanParameters.tier][newPlanParameters.plan][currency];
        newPrice = newPrice + (selectedNewPrice - selectedNewPrice * newPlanParameters.discount);
        let priceDifference = newPrice - oldPrices;

        if (!newPlanParameters.discount)
            return console.log("Please select a valid discount");
        else if (!currency)
            return console.log("Please select the currency!");

    return (
        console.log(`The price difference is for all old plans is ${currency} ${Math.round(priceDifference * 1000) / 1000}`)
    );
};


return (
    <React.Fragment>
        <Container fluid>
            <Row>
                <Col>
                    <PlanParameters heading="New Plan" parameters={newPlanParameters} onChange={newParameter => {
                        setNewPlanParameters(newParameter);
                    }} />
                </Col>
                {
                    oldPlanParams.map((planParams, idx) => {
                        const key = "Old Plan " + (idx + 1).toString();
                        return (
                            <Col key={key}>
                                <PlanParameters
                                    heading={key}
                                    parameters={planParams}
                                    onChange={newParams => {
                                        let current = oldPlanParams;
                                        // Remove current params item
                                        current.splice(idx, 1);
                                        // Re-add the item at the same index
                                        current.splice(idx, 0, newParams);
                                        // Create a new array so that React senses that
                                        // the object has been changed and triggers a 
                                        // re-render
                                        setOldPlanParams([...current]);
                                    }}
                                    actionButtons={<button type="button" onClick={() => {
                                        let current = oldPlanParams;
                                        // Remove current params item
                                        current.splice(idx, 1);
                                        // Create a new array so that React senses that
                                        // the object has been changed and triggers a 
                                        // re-render
                                        setOldPlanParams([...current]);
                                    }}>X</button>
                                    }
                                />
                            </Col>
                        );
                    })
                }
            </Row>
            <Currency currency={currency} onChange={currency => setCurrency(currency)} />
            <Row>
                <button type="button" onClick={() => {
                    let current = oldPlanParams;
                    current.push({});
                    setOldPlanParams([...current]);
                }}>
                    Add Old Plan
                </button>
            </Row>
        </Container>
        <button type="button" onClick={() => {
            calculateDifference();
            // TIERS.current[newPlanParameters.tier][newPlanParameters.plan][currency]
            // TIERS.current[oldPlanParams[0].tier][oldPlanParams[0].plan][currency]
        }}>Calculate</button>
    </React.Fragment>
);
};
export default CalcCompanion;