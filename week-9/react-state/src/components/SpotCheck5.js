import React, { useState } from 'react';

const Hot = () => <div>I'm feeling too hot!</div>
const Cold = () => <div>It's too cold in here!</div>

const SpotCheck5 = () => {
    const [likes, setLikes] = useState(0);

    return (
        <div>
            <div>Likes: {likes}</div>
            <button onClick={() => setLikes(likes + 1)}>Like! 👍</button>
        </div >
    )
}

export default SpotCheck5;
