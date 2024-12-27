let user = {
    firstName: "abhi",
    lastName: "sharma",
    email: "as@as.in",
    age: 17,
}

console.log(typeof(user))


function PrintUser(user : {
    firstName: string,
    lastName:string,
    email:string,
    age:number
}){
    console.log(user)
}

PrintUser(user)

//The above code also works as the type of the user is checked according 
// to the provided object containing types. 
// but if we want to check the type of object same for other function 
// it is better to use INTERFACE so we can use that interface that tells us that how the 
// object's type look .

interface User {
    firstName: string,
    lastName: string,
    email?: string,  //here ? means it is optional to be provided
    age: number,
}


function islegal(user: User){
    if (user.age >=18) {
        return true
    } else {
        return false
    }
}
