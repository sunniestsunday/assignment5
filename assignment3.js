const user1 = {
    name: "Daniel",
    email: "daniel@gmail.com"
}

class Users {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.loginStatus = () => `${this.name}'s login status is unavailable`;
    }
    
}

const Lisa = new Users("lisa@gmail.com", "lisa");
const ben = new Users()
const David = new Users("david@gmail.com","David")
// console.log(`${Lisa.name} has and email of ${Lisa.email} and ${David.name} has an email of ${David.email}`);
console.log(Lisa.loginStatus);
