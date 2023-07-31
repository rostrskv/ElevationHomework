export default function Image({ url, shiftImageBack, shiftImageForward }) {
    return (
        <div>
            <button onClick={() => shiftImageBack()}>Previous</button>
            <img src={url} />
            <button onClick={() => shiftImageForward()}>Next</button>
        </div>
    );
}