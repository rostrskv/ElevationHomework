"use strict"
const Model = function () {
    const _posts = [
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
    return {
        getPosts: () => structuredClone(_posts),
        addPost: (name, post) => {
            _posts.push({ name, post })
            return
        }
    }

}