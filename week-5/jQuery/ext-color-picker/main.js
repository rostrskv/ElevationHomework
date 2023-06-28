"use strict"
$("#colors > span[data-color]").addClass("picker")
for (const element of $("#colors > span[data-color]")) {
    const color = $(element).data("color")
    $(element).css("backgroundColor", color)
}
$("#colors").on("click", "span[data-color]", function () {
    const color = $(this).data("color")
    $(".box").css("backgroundColor", color)
})