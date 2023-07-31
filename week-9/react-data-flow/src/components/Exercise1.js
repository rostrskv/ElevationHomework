import { useState } from 'react'
import Image from './Image'
export default function Excerise1() {
    const [state, setState] = useState({
        images: [
            "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Wurzelspinat02.jpg/220px-Wurzelspinat02.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
        currentImg: 0
    })

    const shiftImageBack = () => setState({
        ...state, currentImg: (state.currentImg + state.images.length - 1) % state.images.length
    })
    const shiftImageForward = () => setState({
        ...state, currentImg: (state.currentImg + 1) % state.images.length
    })

    return (
        <Image url={state.images[state.currentImg]} shiftImageBack={shiftImageBack} shiftImageForward={shiftImageForward} />
    );
}