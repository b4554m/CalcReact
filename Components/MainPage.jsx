import React, {useState, useRef} from 'react';
import CalcCompanion from './CalcCompanion';

const MainPage = (props) => {
    const TIERS = useRef([
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
        }]);
    TIERS.current = [];

    const [isPlansShown, setPlansShown] = useState(false);

    return (
        <React.Fragment>
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
