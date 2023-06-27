"use strict"
const div = '<div class="box"></div>'

$("body").append(div).append(div)

let lastHovered

$(".box").hover(function () {
    if (lastHovered && this !== lastHovered) {
        $(this).css("backgroundColor", "#e74c3c")
        $(lastHovered).css("backgroundColor", "#8e44ad")
    }
    lastHovered = this
}

)

