const booksApiUrl = new URL("https://www.googleapis.com/books/v1/volumes")
//booksApiUrl.searchParams.append("q", "intitle:Name of the Wind")
booksApiUrl.searchParams.append("q", "isbn:0439023521")
const useData = function (data) {
    console.log(data)
}

const fetchBookHandler = function()
{
    $.ajax({
        method: "GET",
        url: booksApiUrl,
        success: useData,
        error: function () {
            console.log(arguments)
        }
    })
    
}

$("#fetch-book").click(fetchBookHandler)


