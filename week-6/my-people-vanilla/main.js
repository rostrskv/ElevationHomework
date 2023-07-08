"use strict"

const people = People()
const renderer = Renderer()

const userApiUrl = "https://randomuser.me/api/?inc=name,email&results=10"
const fetchPeople = function () {
    fetch(userApiUrl)
        .then(response => response.json())
        .then(processPeopleData)
}

const mapUserApiResultsToPeople = data =>
    data.results.map(userResult =>
        Person(`${userResult.name.first} ${userResult.name.last}`, userResult.email).getPerson()
    )

const processPeopleData = function (data) {
    const peopleFromApi = mapUserApiResultsToPeople(data)
    people.setPeople(peopleFromApi)
    renderer.renderPeople(people.getPeople())
}

fetchPeople()