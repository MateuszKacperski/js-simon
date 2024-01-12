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


//creo il timer 
let timer = 30;

timerDisplay.innerText = timer;

//funzione timer
countdown = timer => {

    while(timer > 0){
        timer--;
        console.log(timer);
    }

}

const decrese = setInterval( countdown(timer), 1000);    



