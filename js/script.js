function playGame(argMovePlayer){
    let playerInput
    clearMessages()

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


    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove); 

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(argMovePlayer);

    printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

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
        } else if  (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('The game ended in a draw :(');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
            printMessage('You need to choose 1, 2 or 3');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
            printMessage('You need to choose 1, 2 or 3');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
            printMessage('You need to choose 1, 2 or 3');
        }
    }
    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
