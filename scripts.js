const convertButton = document.querySelector(".convert-button")

function convertValues(){
    console.log("funcionou")
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2

    const convertValue = inputCurrencyValue / dolarToday

    console.log(inputCurrencyValue)
    console.log(convertValue)
}

convertButton.addEventListener("click", convertValues)