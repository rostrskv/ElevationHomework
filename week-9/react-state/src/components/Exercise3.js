import React, { useState } from 'react';
import Landing from './Landing';
import Home from './Home';

const Exercise3 = () => {
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
    const pageChanger = (page) =>
        () =>
            setState({ ...initialState, currentPage: page })

    return (
        <div>
            <button onClick={pageChanger("Landing")}>Landing</button>
            <button onClick={pageChanger("Home")}>Home</button>
            {
                state.currentPage === "Landing"
                    ? <Landing state={state} />
                    : <Home store={state.store} shouldDiscount={state.shouldDiscount} />}
        </div>
    );
}

export default Exercise3;
