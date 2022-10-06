import './Calc';

function calcInternal(oldPlan, targetPlan, _discount, currency) {
    if (!oldPlan || !targetPlan || !currency) {
        return (
            // <p className="error-label">Please fill in all the fields.</p>
            console.log("enter all fields")
        );
    }
};
export default calcInternal;