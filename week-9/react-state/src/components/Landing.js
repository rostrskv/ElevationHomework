import React from 'react';

const Landing = ({ state }) => {
    const hottestItem = state.store.find(i => i.hottest)
    return (<div>Welcome, {state.user}.
        The hottest item is {hottestItem.item} for ${hottestItem.price} </div>)
}
export default Landing;