import React, { useState, useRef } from 'react';
import CalcCompanion from './CalcCompanion';
import { Route, Switch, Link } from 'react-router-dom';
import Breaks from './Break/Break';
const MainPage = () => {

    const [isPlansShown, setPlansShown] = useState(false);
    const [isBreaksShown, setBreaksShown] = useState(false);

    return (
        <React.Fragment>
            {/* <Switch>
                <div>
                    <Route path="./Break/Break.jsx">
                        <button>Click</button>
                    </Route>
                </div>
            </Switch> */}
                    {!isPlansShown && (
                        <div>
                            <button onClick={() => {
                                setPlansShown(true);
                            }}>CalculationsCompanion
                            </button>
                        </div>
                    )}

                    {
                        isPlansShown && (
                            <CalcCompanion />
                        )
                    }
                </React.Fragment>
                );
}

                export default MainPage;
