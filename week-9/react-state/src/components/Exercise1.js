import React, { useState } from 'react';
import Hudini from './Hudini';

const Exercise1 = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <Hudini show={show} />
            <button onClick={() => setShow(!show)}>Magic!</button>
        </div>
    );
}

export default Exercise1;
