"use strict"

const giphyApiKey = ""
const gifUrl = "https://api.giphy.com/v1/gifs/search"
const gifTarget = $("#gif-target")
const searchInput = $("#search-input")
const searchButton = $("#search-button")


const getQueryUrl = query => {
    const url = new URL(gifUrl)
    url.searchParams.append("api_key", giphyApiKey)
    url.searchParams.append("q", query)
    return url
}

const showGif = gifResponse => {
    console.log(gifResponse)
    const responseData = gifResponse.data
    if (responseData.length == 0) {
        gifTarget.attr("src", "data:text/plain,Not found")
    }
    const gifUrl = responseData[0].embed_url
    gifTarget.attr("src", gifUrl)
    console.log(gifTarget.src)
}

const fetchGif = query => {
    const queryUrl = getQueryUrl(query);
    $.ajax({
        method: "GET",
        url: queryUrl,
        success: showGif,
        error: function () {
            console.log(arguments)
        }
    })
}
const searchHandler = () => fetchGif(searchInput.val())
searchButton.on("click", searchHandler)