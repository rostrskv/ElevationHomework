import { event } from 'jquery'
import { useState } from 'react'
const InputTest = () => {
    const [text, setText] = useState("")
    const updateText = (event) => setText(event.target.value)
    const [checkValue, setCheckValue] = useState(false)
    const updateCheckValue = (event) => setCheckValue(event.target.checked)

    return (
        <div>
            <input type="text" value={text} onChange={updateText} />
            <input type="checkbox" checked={checkValue} onChange={updateCheckValue} />
        </div>
    )
}

export default InputTest