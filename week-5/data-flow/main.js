"use strict"
const posts = [
    {
        name: "Uncle Jerome",
        post: "Happy birthday kido!",
    },
    {
        name: "BFF Charlene",
        post: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        post: "Hey ace, have a good one."
    }
]
const render = function () {
    $("#posts").empty()
    for (const post of posts) {
        const postHtml = `<div class="post">
        <span class="name">${post.name}</span>:
        <span class="post">${post.post}</span>
        </div>`
        $("#posts").append(postHtml)
    }
}
render()
$("#post-button").on("click", function () {
    const post = {
        name: $("#name-input").val(),
        post: $("#post-input").val()
    }
    posts.push(post)
    render()
})