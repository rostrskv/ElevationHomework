"use strict"
const Renderer = function () {
    const render = function (posts) {
        $("#name-input").val("")
        $("#post-input").val("")
        $("#posts").empty()
        for (const post of posts) {
            const postHtml = `<div class="post">
            <span class="name">${post.name}</span>:
            <span class="post">${post.post}</span>
            </div>`
            $("#posts").append(postHtml)
        }
    }
    return {
        render
    }
}