// Spot Check 2
$(".red-div").css("color", "red");
$("li:nth-child(1)").css("color", "green")
$("li:nth-child(2)").css("color", "pink")
$("#brown-div").css("color", "brown")

// Spot Check 3
$("#b1, #b2").addClass("box")

// Spot Check 4
$('#my-input').val("Terabyte")

// Spot Check 5

const barcode = $("#item-1").data().barcode;
const expirationDate = $("#item-1").data().expirationdate;
console.log(`The item with barcode ${barcode} will expire on ${expirationDate}`)

// Spot Check 6
$("#hover-me").hover(function () {
    $(this).css("background", "blue");
})

// Spot Check 7
$("#my-input + button").click(function () {
    window.alert($("#my-input").val());
})

// Spot Check 8
$(".box").hover(function () {
    $(this).css("background", "blue");
})

// Creating & Adding/Removing
$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')

// Spot Check 9
$(".feedme").on("click", function () {
    let divCopy = `<div>${$(this).html()}</div>`;
    $("body").append(divCopy)
})

// Spot Check 10
const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
]

for(let name of names)
{    
    $("body").append(`<div>${name.first} - ${name.last}</div>`)
}

// Spot Check 11
$("#bad").hover(function(){
    $(this).remove();   
})

// Spot Check 12, 13
$("#blogs + button").click(function(){
    $("#blogs").append('<div class="blog">blog</div>');
})

$("#blogs").on("click", ".blog", function(){
    $(this).text("blargh") 
  })