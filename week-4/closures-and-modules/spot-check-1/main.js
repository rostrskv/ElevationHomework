"use strict";

const family = function () {
    let members = [];
    const birth = function (name) {
        members.push(name);
        console.log(members);
    }
    return birth;
}

const giveBirth = family();

giveBirth("ALice");
giveBirth("Bob");
giveBirth("Carol");

