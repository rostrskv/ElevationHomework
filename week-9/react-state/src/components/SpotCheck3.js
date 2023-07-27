import React, { useState } from 'react';

function Calendar({ reservations }) {
    return (
        <div id="calendar">
            <h4>Calendar</h4>
            <ul>
                {reservations.map(r =>
                    <li key={`${r.day}-${r.time}`}>{
                        `${r.name} has a reservation on ${r.day} @ ${r.time}`
                    }</li>)}
            </ul>
        </div>
    )
}

function Register({ reservations }) {
    return (<div id="register">
        <h4>Register</h4>
        <ul>
            {reservations.map(r =>
                <li key={`${r.day}-${r.time}`}>{
                    `${r.day} @ ${r.time}`
                }</li>)}
        </ul>
    </div>)
}

const SpotCheck3 = () => {
    const [reservations, setReservations] = useState([
        { day: "Monday", time: 2000, name: "Earl" },
        { day: "Monday", time: 1845, name: "Ella" },
        { day: "Tuesday", time: 1930, name: "Linda" },
        { day: "Wednesday", time: 2015, name: "Anni" }
    ]);

    return (
        <div>
            <Calendar reservations={reservations} />
            <Register reservations={reservations} />
        </div>
    )
}

export default SpotCheck3;
