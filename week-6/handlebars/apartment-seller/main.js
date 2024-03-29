
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    //Your code goes here.
    const resultsTemplateSource = $("#resuls-template").html()
    const resultsElement = $("#results")
    const resultsTemplate = Handlebars.compile(resultsTemplateSource)
    resultsElement.append(resultsTemplate(apartments))
}

const priceFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
Handlebars.registerHelper("formatPrice", num => priceFormat.format(num));

renderApts(apartments) //renders apartments when page loads