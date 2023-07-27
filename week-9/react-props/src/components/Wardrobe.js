import React from 'react'
import Article from './Article';

const Wardrobe = ({ wardrobe }) => (    
    wardrobe.map(({ type, color, size }) => <Article
        type={type}
        color={color}
        size={size}
        key={`${type}-${color}-${size}`}
    />)
)
export default Wardrobe;