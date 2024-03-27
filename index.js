
let btnEl = document.getElementById("btn")
let inputFieldEl = document.getElementById("input-field")

let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

btnEl.addEventListener("click", function() {

    let inputValue = inputFieldEl.value 

    lengthEl.innerHTML = `
                          <p> ${inputValue} meter = ${(inputValue * meterToFeet).toFixed(3)} feet </p> 
                          <p> ${inputValue} feet = ${(inputValue / meterToFeet).toFixed(3)} meter </p> 
                          `

    volumeEl.innerHTML = `
                            <p> ${inputValue} liters = ${(inputValue * literToGallon).toFixed(3)} gallons </p> 
                            <p> ${inputValue} gallons = ${(inputValue / literToGallon).toFixed(3)} liters </p>
                             `

    massEl.innerHTML = `
                        <p> ${inputValue} kg = ${(inputValue * kiloToPound).toFixed(3)} pounds <p/>
                        <p> ${inputValue} pounds = ${(inputValue / kiloToPound).toFixed(3)} kg <p/>
                        `
    
})