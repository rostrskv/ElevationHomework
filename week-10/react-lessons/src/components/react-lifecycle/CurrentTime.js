import { useState, useEffect } from "react";
export default function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timeoutId = setInterval(
            () => setCurrentTime(new Date()),
            1000
        )
        return () => clearInterval(timeoutId)
    })
    return <div>{currentTime.toLocaleTimeString()}</div>
}