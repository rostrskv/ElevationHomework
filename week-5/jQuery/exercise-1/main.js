"use strict"
$("#add").on("click", function () {
    $(humans).append(`<li class="human">${$("#name").val()}</li>`)
})
$("#humans").on("click", ".human", function () {
    $(this).remove()
})