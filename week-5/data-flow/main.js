"use strict"

const model = Model()
const renderer = Renderer()
const posts = model.getPosts()
Renderer().render(posts)

$("#post-button").on("click", function () {
    const [name, post] = [$("#name-input").val(), $("#post-input").val()]
    if (name.length > 0 && post.length > 0) {
        model.addPost(name, post)
        const posts = model.getPosts()
        Renderer().render(posts)
    }
})