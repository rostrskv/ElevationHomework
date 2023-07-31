import Contact from "./Contact"
export default function List({ contacts, displayConvo }) {
    return contacts.map(c => <Contact key={c} contact={c} displayConvo={displayConvo} />)
}