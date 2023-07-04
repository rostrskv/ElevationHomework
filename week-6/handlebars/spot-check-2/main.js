"use strict"
var classData = {
    classmates: [
        {name: "That on gal", description: "Always has the ansswer"},
        {name: "The weird dude", description: "Quick with a smile"},
        {name: "Taylor", description: "Just Taylor"}
    ]
}

const classmatesTemplateSource = $("#classmates-template").html()
const classmatesTemplate = Handlebars.compile(classmatesTemplateSource)
const classmatesElement = $("#classmates")
classmatesElement.append(classmatesTemplate(classData))