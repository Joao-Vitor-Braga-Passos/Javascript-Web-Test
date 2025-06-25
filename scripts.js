const convertButton = document.querySelector(".convert-button")
const currencyConverter = document.getElementsByClassName("currency-select")
const currencySelector = document.querySelector(".currency-select-convert")

function convertValues(){
    console.log("funcionou")
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelector.value)
    const dolarToday = 5.55
    const euroToday = 6.46
    const libraToday = 757

    if(currencySelector.value == "dolarConvert"){
        //Se o select estiver selecionado o valor de dolar,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)

    }
    if(currencySelector.value == "euroConvert"){ 
        //Se o select estiver selecionado o valor de euro,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

    }

    if(currencySelector.value == "libraConvert"){ 
        //Se o select estiver selecionado o valor de euro,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
    }).format(inputCurrencyValue / libraToday)

    }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(inputCurrencyValue)
        
    console.log(inputCurrencyValue)
}

function changeConvert() {
    const currencyName = document.querySelector(".currency-img")

}


function changeCurrency() {
    const currencyNameConvert = document.getElementById("convert-name")
    const currencyImgConvert = document.querySelector(".convert-currency-img")

        if(currencySelector.value == "dolarConvert") {
            currencyNameConvert.innerHTML = "Dólar"
            currencyImgConvert.src = "./assets/dolar.png"
        }

           if(currencySelector.value == "euroConvert") {
            currencyNameConvert.innerHTML = "Euro"
            currencyImgConvert.src = "./assets/euro.png"
        }

           if(currencySelector.value == "libraConvert") {
            currencyNameConvert.innerHTML = "Libra"
            currencyImgConvert.src = "./assets/libra.png"
        }


        convertValues()

}

currencySelector.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)