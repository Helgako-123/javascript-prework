function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2) {
        return 'papier';
    } else if(argMoveId == 3) {
        return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + computerMove); 


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem' + argComputerMove + ', a Ty ' + argPlayerMove);
    
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('You win!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('You lose!');
      } else if  (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('You lose!');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('You win!');
      } else if  (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('You win!');
      } else if  (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('You lose!');
      } else if  (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        printMessage('The game ended in a draw :(');
      } else if  (argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('The game ended in a draw :(');
      } else if  (cargComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        printMessage('The game ended in a draw :(');
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
        printMessage('You need to choose 1, 2 or 3');
      } else if (argComputerMovee == 'papier' && argPlayerMove == 'nieznany ruch') {
        printMessage('You need to choose 1, 2 or 3');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
        printMessage('You need to choose 1, 2 or 3');
      }
}
displayResult();
