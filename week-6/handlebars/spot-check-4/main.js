"use strict"
const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const render = function (templateSelector, elementSelector, data) {
    const source = $(templateSelector).html();
    const template = Handlebars.compile(source);
    let newHTML = template(data);
    $(elementSelector).append(newHTML);
}
render("#animals-template","#animals", animals)
render("#languages-template","#languages", languages)