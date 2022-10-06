import CalcCompanion from "./CalcCompanion";
import MainPage from "./MainPage";
import calcInternal from './calcInternal';

function Calc(props) {
    const g_OldPlans = [];
    let inTier = null,
        inTargetTier = null,
        inPlan = null,
        inTargetPlan = null,
        inCurrency = null,
        discount = null,
        inTargetDiscount = null;

    for (let i = 0; i < g_OldPlans.length; i++) {
        if (!g_OldPlans[i] || isNaN(g_OldPlans[i].discount)) {
            return (
                // <p className='error-label'>"Please fill in all the fields."</p>
                console.log("1enter all fields")
            )
        }
    }
    discount = parseFloat(inTargetDiscount) / 100;

    if (!inTargetTier || !inTargetPlan || isNaN(discount) || !inCurrency) {
        return (
            // <h1 className="result-label">Please fill in all the fields.</h1>
            console.log("2enter all fields")
        );
    }

    if ([0, 20, 25, 30, 40, 50].indexOf(parseFloat(inTargetDiscount)) === -1) {

        return (
            // <p className="error-label">Invalid discount value.</p>
            console.log("Invalid discount value")
        );
    }
    else {
        const targetPlan = props.TIERS.inTargetTier.inTargetPlan.inCurrency;

        let totalDiscountAmount = 0,
            totalCurrentPrice = 0,
            totalCoupounValue = 0;
        for (let i = 0; i < g_OldPlans.length; ++i) {
            const oldPlan = g_OldPlans[i];
            const r = calcInternal(oldPlan, targetPlan, oldPlan.discount, inCurrency);
            totalDiscountAmount = totalDiscountAmount + r.discountAmount;
            totalCurrentPrice = totalCurrentPrice + r.price;
            totalCoupounValue = totalCoupounValue + r.couponValue;
        }

        let targetPrice = props.TIERS.inTargetTier.inTargetPlan.inCurrency;
        let couponPerc = props.TIERS.inTargetTier.inTargetPlan.inCurrency;
        targetPrice = targetPrice - (targetPrice * discount);
        let currentPrice = totalCurrentPrice;
        let diff = targetPrice - currentPrice;
        let couponValue = totalCoupounValue;
        couponValue = ((couponPerc - diff) / couponPerc) * 100

        if (diff > 0) {
            return (
                console.log("success")
                // <div>
                //     <p>The price difference is ${inCurrency}{Math.round(diff * 1000) / 1000}</p>
                //     <p>The discount amount in % is ${Math.round(couponValue * 10000) / 10000}</p>
                // </div>
            );
        } else {
            return (
                console.log("1/2 success")
                // <p className="success-label">The price difference is ${inCurrency} ${Math.round(diff * 1000) / 1000}</p>
            );
        }
    }
};

export default Calc;