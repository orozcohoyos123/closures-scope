const buildCount = (i) => { 
    let count = i
    const displayCount = () => {
        console.log(count++)
    }

    return displayCount
}

const myCount = buildCount(1) // se envia el parametro desde que se asigna la funcion para  pasarle los parametros de la funcion padre
myCount() //si se envia el valor desde el llamado de la constante que instancia el closure, estos parametros iran a la funcion hijo
myCount()