import { useState, useEffect } from "react";
export default function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timeoutId = setInterval(
            () => setCurrentTime(new Date()),
            1000
        )
        return () => clearTimeout(timeoutId)
    })
    return <div>{`${currentTime.toLocaleTimeString()}.${currentTime.getMilliseconds()}`}</div>
}