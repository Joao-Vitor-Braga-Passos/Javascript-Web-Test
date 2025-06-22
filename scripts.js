const convertButton = document.querySelector(".convert-button")
const currencySelector = document.querySelector(".currency-select")

function convertValues(){
    console.log("funcionou")
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelector.value)
    const dolarToday = 5.2
    const euroToday = 6.2

    if(currencySelector.value == "dolar"){
        //Se o select estiver selecionado o valor de dolar,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)

    }
    if(currencySelector.value == "euro"){ 
        //Se o select estiver selecionado o valor de euro,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    console.log(inputCurrencyValue)
}

convertButton.addEventListener("click", convertValues)