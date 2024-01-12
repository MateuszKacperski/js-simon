console.log('Js ok');


// Functin that give a random number between 1 and 100
randomNumber = () => {
    const number = Math.floor(Math.random() * 100 ) + 1;
    return number;
}

// recupero gli elementi dal DOM
const timerDisplay = document.getElementById('timer');
const numbersDisplay = document.getElementById('numbers');


const numbers = [];

//genero i 5 numeri casuali
for(let i =0; i < 5; i++){
    numbers.push(' ' + randomNumber() + ' ');
}


// stampo i numeri in pagina 
 numbersDisplay.innerText = numbers;

console.log(numbers);

