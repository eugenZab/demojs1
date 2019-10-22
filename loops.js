const users = require("./users.json");
const _ = require('lodash');

const checkIfAdult = function (user) {
    if (user.age > 17) {
        return true
    } else return false
}

_.forEachRight(users, function(user) {
    if (checkIfAdult(user)){
        console.log(`${user.name} is adult` )
    } else console.log(`${user.name} is not adult` )
});