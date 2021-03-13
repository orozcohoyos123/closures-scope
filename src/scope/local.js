const helloWorld = () => {
    const localHello = 'Hello world'
    console.log(localHello)
}

helloWorld()
console.log(localHello)


var scope = 'im global'

const functionScope = () => {
    var scope = 'im local'
    const func = () => {
        return scope
    }

    console.log(func())
}

functionScope()
