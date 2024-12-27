//specifying type to the parameters
function sayHello(firstName: string){
    console.log("Hello "+firstName)
}

sayHello("abhi")

//this function returns an number
function Sum(a:number , b:number):number{
    return a+b
}

//type inference                 `:number ` is not needed
function Sum1(a:number , b:number){
    return a+b
}

console.log(Sum(5,6))

function isLegal(age:number){
    if (age>=18) {
        return true
    } else {
        return false      
    }
}

//function as the parameter
function runAfter2s(fn : () => void){
    setTimeout(fn, 2000)
}

console.log(isLegal(12))