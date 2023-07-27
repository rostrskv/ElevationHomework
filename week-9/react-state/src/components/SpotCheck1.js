
const SpotCheck1 = () => {
    const mouseOverHandler = () => console.log("I was hovered!")
    
    return <button onMouseEnter={mouseOverHandler}>Hover me!</button>
}

export default SpotCheck1