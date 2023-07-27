import React from 'react';
import Item from './Item';

const Home = ({ store }) => {
    return (<div>
        <h4>Store</h4>
        {store.map((i) => <Item item={i.item} price={i.price} key={i.item}/>)}
    </div>)
}
export default Home;