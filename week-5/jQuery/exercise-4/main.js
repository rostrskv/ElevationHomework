"use strict"
$(".item").click(function () {
    $("#cart").append(`<div class=cart-item>${$(this).text()}</div>`)
})