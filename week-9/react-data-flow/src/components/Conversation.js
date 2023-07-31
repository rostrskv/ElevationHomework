export default function Conversation({ convo, goBack }) {
    return <div>
        <button className="back" onClick={goBack}>Back</button>
        {
            convo.map((c, i) =>
                <div key={i}><strong>{c.sender}</strong>: {c.text}</div>)
        }
    </div>

}