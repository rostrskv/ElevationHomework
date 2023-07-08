"use strict"

const Renderer = function () {
    const _peopleContainer = $("#people-container")
    const _peopleTemplateSource = $("#people-template").html()
    const _peopleTemplate = Handlebars.compile(_peopleTemplateSource)

    const renderPeople = function (people) {
        _peopleContainer.empty()
        _peopleContainer.append(_peopleTemplate(people))
    }
    return { renderPeople }
}