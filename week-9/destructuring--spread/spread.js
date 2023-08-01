// The Factory Mistake
let meatArr = ["beef", "chicken"]
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"]

meatArr = [...meatArr, ([{}, ...vegetableArr] = vegetableArr)[0]]
console.log("Meat:", meatArr, "Vegtables:", vegetableArr)

// The Torn Passport
var firstPiece = { id: 101, name: 'Ofri' }
var secondPiece = { country: 'Israel' }

let passport = { ...firstPiece, ...secondPiece }
console.log("Passport:", passport)