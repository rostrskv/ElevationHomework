"use strict"
const randomWordUrl = "https://random-word-api.herokuapp.com/word"
const booksUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:"

$.get(randomWordUrl)
    .then(words => $.get(booksUrl + words[0]))
    .then(books => console.log(
        `Random book title: ${books.items[0].volumeInfo.title}`)
    )


