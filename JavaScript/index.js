let minutes = document.querySelector('[minutes]').value

let btn = document.querySelector('[multiply]')

let btn2 = document.querySelector('[clear]')

// constant second will always be 60
const seconds = 60 

let display = document.querySelector('[view]')

// event listeners for both buttons
btn.addEventListener('click', multiply)
btn2.addEventListener('click', clear)

// converting function to convert minutes to seconds

function multiply (){
    let minutes = document.querySelector('[minutes]').value
    const seconds = 60
    let ans = minutes * seconds
    console.log(ans);
    display.value = ans
}
// Function for the clear button, to clear both the answer and input for minutes
function clear (){
    document.querySelector('[minutes]').value = '';
    document.querySelector('[view]').value = '';
}