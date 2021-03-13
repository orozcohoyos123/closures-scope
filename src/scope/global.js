var hello = 'Hello'
let world = 'Hello World'
const helloWorld = 'Hello World!'

const anotherFuction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFuction()

// #region mala practica, es una variable global creada desde una funcion
const helloWorld = () => {
    globalVar = 'im global'
}

helloWorld()
console.log(globalVar)

const anotherFunction2 = () => {
    var localVar = globalVar = 'im global'
}

anotherFunction2()
console.log(globalVar)
// #endregion

