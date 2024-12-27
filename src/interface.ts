interface User {
    firstName: string,
    lastName: string,
    email: string,
    age: number,
}

let user = {
    firstName: "abhi",
    lastName: "sharma",
    email: "as@as.in",
    age: 17,
}

console.log(islegal(user))

function islegal(user: User){
    if (user.age >=18) {
        return true
    } else {
        return false
    }
}