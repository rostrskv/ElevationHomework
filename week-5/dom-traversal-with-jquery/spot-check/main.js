"use strict"
// Spot Check 1
$("#sp1 button").on("click", function () {
    const text = $(this).closest("div").find("span").text()
    console.log(text)
}
)
// Spot Check 2
$("#sp2 button").on("click", function(){
    console.log($("#sp2 .container").find("p").text())
})
