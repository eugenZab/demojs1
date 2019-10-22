const users = require("./users.json");

const checkIfAdult = function (user) {
    if (user.age > 17) {
        return true
    } else return false
}

for (const user of users){
    if (checkIfAdult(user)){
        console.log(`${user.name} is adult` )
    } else console.log(`${user.name} is not adult` )
}