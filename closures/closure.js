// sin closures: #region funcion que no recuerda valores, ya que no enlaza su entorno lexico
const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins += coins
    console.log(`dinero ahorrado: ${saveCoins}`)
}

moneyBox(5)
moneyBox(10)
//#endregion 

// con closures: #region funcion que recuerda sus valores gracias a su encadenacion al ambito lexico
const moneyBox = () => {
    var saveCoins = 0

    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`dinero ahorrado: ${saveCoins}`)
    }
    return countCoins
}
let myMoneyBox = moneyBox()

myMoneyBox(5)
myMoneyBox(10)
//#endregion 