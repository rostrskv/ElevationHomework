"use strict"

const Renderer = function () {
    const _peopleContainer = document.getElementById("people-container")
    const _personTemplate = document.getElementById("person-template")

    const renderPeople = function (people) {
        _peopleContainer.replaceChildren()
        for (const p of people) {
            const personCard = _personTemplate.content.cloneNode(true).querySelector(".person-card")
            personCard.querySelector(".person-name").textContent = p.name
            const emailAnchor = personCard.querySelector(".person-email>a")
            emailAnchor.textContent = p.email
            emailAnchor.href = `mailto:${p.email}`
            _peopleContainer.appendChild(personCard)
        }
    }
    return { renderPeople }
}