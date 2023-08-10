import { useState, useEffect } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");
    useEffect(() => {
        if (name) {
            console.log(`${name} selected ${fruit}`)
        }
    }, [fruit])

    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={(e) => setFruit(e.target.value)} value={fruit}>
                <option>Apple</option>
                <option>Banana</option>
                <option>Cherry</option>
                <option>Orange</option>
            </select>
        </div>
    );
}
export default Exercise2;