import React, { useState } from 'react';

const Breaks = () => {
    const [breakClicked, setBreakClicked] = useState(false);

if (breakClicked === true) {
    return (
        <div>Your break starts now</div>
    );
}

    return (
        
        <button type="button" onClick={() => {
            setBreakClicked(true);
            
        }}>Break</button>
        );
}
export default Breaks;