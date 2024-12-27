type User1 = {
    firstName:string,
    lastName: string,
    age:number
}

interface User2 {
    firstName:string,
    lastName: string,
    age:number
}

interface User3 {
    loggedI:boolean
    useid:string
}

interface endUser extends User2 , User3{
    
}

//Both Type and interface are same we can use both for type checking 
//but when we declare interface we dont use = 
//interface is used to implement class but type does not.



//UNION
//we can do union of types in type, for eg

type ipArg = number | string

function hello(input:ipArg) {
    console.log(input)
}
hello(2)
hello("2")

//INTERSECTION
//suppose we have create an type which has every property of multiple Types/Interface
//for eg

type employee = {
    firstName:string,
    lastName:string,
    email:string
}

interface manager  {
    firstName:string,
    lastName:string,
    department:string
}

type Lead = employee & manager;

const teamLead:Lead = {
    firstName:"Abhi",
    lastName:"sharma",
    email:"as@gmail.com",
    department:"IT"
}