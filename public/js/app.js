// & PART 1

// ^ Creating DATABASE

class Database {
    constructor(name, capital, clients) {
        this.name = name
        this.capital = capital
        this.clients = clients
    }
}

let database = new Database(`database`, 1000000,
    [{ name: `Yahya`, money: 10000, email: `yahyajmilou@gmail.com`, password: `qwerty123` }
    ]);

// ! Account Creation

// ^ Name

class User {
    constructor(name, email, age, password, money) {
        this.name = name
        this.email = email
        this.age = age
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


let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/
let numbers = /[0-9]/

if (specialChars.test(userName) == true || numbers.test(userName) == true){
    alert(`no special caracters needed , please refresh the page to try again`)
}

// ^ Email

let getEmail = prompt(`enter your mail`)

let userEmail = getEmail.toLowerCase().replace(/\s/g, '')

// * cheeking if we already have the same email in database

const dataSearch = (index) => {
    let getSignedEmail = Object.values(database.clients[index])
    let findSignedEmail = getSignedEmail[2]
    if (userEmail == findSignedEmail) {
        alert(`this email is already signed up , refresh the page to login`)
    }else{

    }

}

for (let index = 0; index < database.clients.length; index++) {
    const element = database.clients[index];
    dataSearch(index)
}


