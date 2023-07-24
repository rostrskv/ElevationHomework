import { FINANCE, WEATHER, EMOTIONS } from "./consts.js" 
const handleComplaint = function (complaint) {
    const { text, type } = complaint
    switch (type) {
        case FINANCE:
            console.log("Money doesn’t grow on trees, you know.”")
            break
        case WEATHER:
            console.log("It is the way of nature. Not much to be done.")
            break
        case EMOTIONS:
            console.log("It’ll pass, as all things do, with time.")
            break           

    }
}

let complaint1 = {
    text: "I'm not getting enough money",
    type: FINANCE //use the FINANCE type from the consts module
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: FINANCE //use the FINANCE type from the consts module
}

let complaint3 = {
    text: "I'm always full of energy",
    type: EMOTIONS //use the EMOTIONS type from the consts module
}

handleComplaint(complaint1) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint2) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint3) //should print "It'll pass, as all things do, with time."
