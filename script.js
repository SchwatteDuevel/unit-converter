const input = document.getElementById("input-number");
const btn = document.getElementById("btn-input");
const lengthRes = document.getElementById("length-result");
const volumeRes = document.getElementById("volume-result");
const massRes = document.getElementById("mass-result");

let meter = "";
let liter = "";
let kilogram = "";
let feet = "";
let gallon = "";
let pound = "";

// Constants for converting
const length = 3.281;
const volume = 0.264;
const mass = 2.204;

let inputValue = '';

//function to convert all measurements
function convert() {
    inputValue = input.value;
    meter = inputValue / length;
    feet = inputValue * length;
    liter = inputValue / volume;
    gallon = inputValue * volume;
    kilogram = inputValue / mass;
    pound = inputValue * mass;
}

//Event that triggers converting function and output
btn.addEventListener("click", () => {
    convert();
    lengthRes.innerHTML = `${inputValue} meters = ${feet.toFixed(3)} feet | ${inputValue} feet = ${meter.toFixed(3)} meters`;
    volumeRes.innerHTML = `${inputValue} liters = ${gallon.toFixed(3)} gallons | ${inputValue} gallons = ${liter.toFixed(3)} liters`;
    massRes.innerHTML = `${inputValue} kilograms = ${pound.toFixed(3)} pounds | ${inputValue} pounds = ${kilogram.toFixed(3)} kilograms`;
    input.value = "";
})

//Theme switcher: two different stylesheet files
const btnTheme = document.getElementById("switchMode");
const theme = document.getElementsByTagName("link")[0];

btnTheme.addEventListener("click", () => {
        if (theme.getAttribute('href') == 'styles.css') {
            theme.setAttribute('href', 'styles-dark.css');
        } else {
            theme.setAttribute('href', 'styles.css');
        }
    })
