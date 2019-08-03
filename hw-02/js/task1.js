"use strict";

const users = ["Mango", "Poly", "Ajax", "Chelsey"];
users.shift(1);
console.log(users);

users.pop(3);
console.log(users);

users.unshift("Lux");
console.log(users);

users.push("Jay", "Kiwi");
console.log(users);

const userToDelete = "Ajax";
users.indexOf(userToDelete);
users.splice(users.indexOf(userToDelete), 1);
console.log(users);

const userToInsert = "Kong";
const insertBefore = "Jay";
users.splice(users.indexOf(insertBefore), 0, userToInsert);
console.log(users);
