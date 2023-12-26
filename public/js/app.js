// & PART 1

// ^ Creating DATABASE

class Database {
    constructor(name, capital, clients) {
        this.name = name
        this.capital = capital
        this.clients = clients
    }
    check() {
        let searchIf = Object.values(database.clients[index])
        let findIf = searchIf.find(element => element == this.clients.)
    }
}

let database = new Database(`database`, 1000000,
    [{ name: `Yahya`, money: 10000, email: `yahyajmilou@gmail.com`, password: `qwerty123` }
    ]);

// ! Account Creation

// ^ Name

class User {
    constructor(name, email, password, money) {
        this.name = name
        this.email = email
        this.password = password
        this.money = money
    }
}

let getName = prompt(`enter your full name`).trim()

while (getName.replace(/\s/g, '').length < 5) {
    getName = prompt(`5 chars are the min , enter your full name`).trim()
}

let userName = getName.split(` `).map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}).join(` `)


// ! has to be solved
// let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/

// let numbers = /[0-9]/

// while (specialChars.test(userName) == 1 && numbers.test(userName) == 1) {
//     getName = prompt(`no special chacters or numbers , enter your full name`).trim()
// }
// ! has to be solved

let getEmail = prompt(`enter your mail`)

let userEmail = getEmail.toLowerCase().replace(/\s/g, '')

// * cheeking if we already have the same email in database

// for (let index = 0; index < database.clients.length; index++) {
//     const element = database.clients[index];
//     let searchIf = Object.values(database.clients[index])
//     let findIf = searchIf.find(element => element == `yahyajmilou@gmail.com`)
// }

console.log(checkdata);

// console.log(userEmail);