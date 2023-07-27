import React from 'react';
import Item from './Item';

const Home = ({ store, shouldDiscount }) => {
    const formatPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format

    const discountedPrice = storeItem =>
        shouldDiscount
            ? storeItem.price * (1 - storeItem.discount)
            : storeItem.price
    return (<div>
        <h4>Store</h4>
        {store.map(i =>
            <Item item={i.item} price={formatPrice(discountedPrice(i))} key={i.item} />
        )}
    </div>)
}
export default Home;