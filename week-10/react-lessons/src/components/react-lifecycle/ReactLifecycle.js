import { useState, useEffect } from 'react'
export default function ReactLifecycle() {
    const [titleIndex, setTitleIndex] = useState(0)

    const updateTitle = () => {
        console.log("update index", titleIndex + 1);
        setTitleIndex(titleIndex + 1);
    }

    useEffect(() => {
        setTimeout(updateTitle, 1000)
    })

    return (
        <div>
            <div className="box">{titleIndex}</div>
        </div>
    );
}