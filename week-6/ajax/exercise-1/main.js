const booksApiUrl = "https://www.googleapis.com/books/v1/volumes"
const useData = booksData => {
    console.log(booksData)
    booksData.items.forEach(
        book => console.log(`${book.volumeInfo.title} by ${book.volumeInfo.authors?.join(", ")
            } ${book.volumeInfo.industryIdentifiers.map(id => `${id.type}: ${id.identifier}`)?.join(", ")}`)
    )
}
const getQueryUrl = (queryType, queryValue) => {
    const url = new URL(booksApiUrl)
    url.searchParams.append("q", `${queryType}:${queryValue}`)
    return url
}

const fetchBook = (queryType, queryValue) => {
    $.ajax({
        method: "GET",
        url: getQueryUrl(queryType, queryValue),
        success: useData,
        error: function () {
            console.log(arguments)
        }
    })
}

const fetchBookHandler = function () {
    fetchBook("isbn", $("#isbn").val())
}

$("#fetch-book").click(fetchBookHandler)


