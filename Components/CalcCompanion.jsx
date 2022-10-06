import React, { useState } from 'react';
import Calc from './Calc'
import Button from './PlansInfo/Button'
import Currency from './PlansInfo/Currency';
import PlanParameters from './PlansInfo/PlanParameters';
import { Container, Row, Col } from 'react-bootstrap';

// const [isAddPlanClicked, setIsAddPlanClicked] = useState('');

function CalculateDifferent(plan1, plans2) {

}

const CalcCompanion = (props) => {
    const [currency, setCurrency] = useState(null);

    const [newPlanParameters, setNewPlanParameters] = useState({});

    const [oldPlanParams, setOldPlanParams] = useState([]); 

    return (
        <React.Fragment>
            <Currency currency={currency} onChange={currency => setCurrency(currency)} />
            <Container fluid>
                <Row>
                    <Col>
                        <PlanParameters heading="New Plan" parameters={newPlanParameters} onChange={newParameter => {
                            setNewPlanParameters(newParameter);
                        }} />
                    </Col>
                    {
                        oldPlanParams.map((planParams, idx) => {
                            var key = "Old Plan " + (idx + 1).toString();
                            return (
                                <Col key={key}>
                                    <PlanParameters 
                                        heading={key}
                                        parameters={planParams}
                                        onChange={newParams => {
                                            var current = oldPlanParams;
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
                                            var current = oldPlanParams;
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
                <Row>
                    <button type="button" onClick={() => {
                        var current = oldPlanParams;
                        current.push({});
                        setOldPlanParams([...current]);
                    }}>
                        Add Old Plan
                    </button>
                </Row>
            </Container>
            <button type="button" onClick={() => {
                console.debug(newPlanParameters.discount);                
                // console.debug(oldPlanParams[0].discount);
                // console.debug(oldPlanParams[1].discount);
                // console.debug(oldPlanParams[2].discount);
            }}>Calculate</button>
        </React.Fragment>
    );
};
export default CalcCompanion;