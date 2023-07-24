import validator from 'validator'
//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
const isValidEmail = validator.isEmail("shoobert@dylan")
console.log(isValidEmail)

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
const isValidPhone = validator.isMobilePhone("786-329-9958", "en-US")
console.log(isValidPhone)

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
const cleanText = validator.blacklist(text, blacklist)
console.log(cleanText)


// Exercise 2
import { faker } from '@faker-js/faker';
const makeHuman = function (num) {
    for (let i = 0; i < num; i++) {
        console.log(
            `${faker.person.firstName()}, ${faker.image.avatar()}, ${faker.company.name()}`)
    }
}
makeHuman(2) //prints the following:
// Viola, https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg, Donnelly - Feil
// Isaias, https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg, Wilkinson, Hickle and Hoppe