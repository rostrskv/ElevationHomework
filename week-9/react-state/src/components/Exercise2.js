import React, { useState } from 'react';
import Landing from './Landing';
import Home from './Home';

const Exercise2 = () => {
    const initialState = {
        user: "Robyn",
        store: [
            { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
            { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
            { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
        ],
        shouldDiscount: false,
        currentPage: "Landing"
    }
    const [state, setState] = useState(initialState)
    return (
        <div>
            <Landing state={state} />
            <hr />                        
            <Home store={state.store} />
        </div>
    );
}

export default Exercise2;
