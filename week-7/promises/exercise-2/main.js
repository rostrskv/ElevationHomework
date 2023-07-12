"use strict"
const randomWordUrl = "https://random-word-api.herokuapp.com/word"
const booksUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:"
const giphyUrl = "https://api.giphy.com/v1/gifs/search"
const giphyApiKey = ""
const getQueryUrl = query => {
    const url = new URL(giphyUrl)
    url.searchParams.append("api_key", giphyApiKey)
    url.searchParams.append("q", query)
    return url
}

$.get(randomWordUrl)
    .then(words => {
        const word = words[0]
        const booksPromise = $.get(booksUrl + word)
        const gifPromise = $.get(getQueryUrl(word))
        return Promise.all([booksPromise, gifPromise])
    })
    .then(([books, gif]) => {
        const bookTitle = books.items[0].volumeInfo.title
        const gifUrl = gif.data[0].images.downsized_large.url
        $("#bookTitle").html(bookTitle)
        $("#gif").attr("src", gifUrl)
    })


