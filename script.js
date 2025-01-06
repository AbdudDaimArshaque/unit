/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inpEl = document.getElementById("inp")
const btnEl = document.getElementById("btn")
const clearEl = document.getElementById("clear")
const p1El = document.getElementById("p1")
const p2El = document.getElementById("p2")
const p3El = document.getElementById("p3")

btnEl.addEventListener("click" , function() {
        p1El.textContent = `${Number(inpEl.value)} meters = ${(Number(inpEl.value)* 3.28084).toFixed(3)} feet | 
        ${Number(inpEl.value)} feet = ${(Number(inpEl.value) / 3.28084).toFixed(3)} meters`
        
        p2El.textContent = `${Number(inpEl.value)} liters = ${(Number(inpEl.value)* 0.264172).toFixed(3)} gallons | 
        ${Number(inpEl.value)} gallons = ${(Number(inpEl.value) / 0.264172).toFixed(3)} liters` 
        
        p3El.textContent = `${Number(inpEl.value)} kilograms = ${(Number(inpEl.value)* 2.20462).toFixed(3)} pounds | 
        ${Number(inpEl.value)} pounds = ${(Number(inpEl.value) / 2.20462).toFixed(3)} kilograms` 
})

clearEl.addEventListener("click" , function() {
        inpEl.value = ""
        p1El.textContent = " | "
        p2El.textContent = " | "
        p3El.textContent = " | "
})