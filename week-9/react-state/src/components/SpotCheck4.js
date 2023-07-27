import React, { useState } from 'react';

const Hot = () => <div>I'm feeling too hot!</div>
const Cold = () => <div>It's too cold in here!</div>

const SpotCheck4 = () => {
    const [isHot, setIsHold] = useState(true);
    const toggleIsHot = ()=>setIsHold(!isHot)
    return (
        <div>
            {
                isHot ? <Hot /> : <Cold />
            }
            <button onClick={toggleIsHot}>Switch</button>
        </div>
    )
}

export default SpotCheck4;
