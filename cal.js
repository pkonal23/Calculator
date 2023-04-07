let num1 = 8
let num2 = 4
document.getElementById("no1-el").textContent=num1
document.getElementById("no2-el").textContent=num2

let sumEl= document.getElementById("ans-el")

function add() {
    let sumz=num1+num2
    sumEl.textContent="Sum: " + sumz
}
function sub() {
    let sumz=num1-num2
    sumEl.textContent="Sub: " + sumz
}
function mul() {
    let sumz=num1*num2
    sumEl.textContent="Mul: " + sumz
}
function div() {
    let sumz=num1/num2
    sumEl.textContent="Div: " + sumz
}