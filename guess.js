const prompt = require('prompt-sync')();


// A Function that contains the logic for the guess game and has the minimum and maximum values for the guess game as parameters.
function guessGame(min, max){
    let safeword = 'end';
    let stage = 1;
    let points = 0;
    let changeNum = 1;
    let random_num
    let tries = 0;


    let username = prompt('Please enter your username to begin: ');
  
    console.log(`\nWelcome to The Guessing Game ${username}! \n\nTo end the game, type "end" into the prompt. \n\nGoodluck!! \n\n`);


    while(true){
      // print out players current stage and points gained
        console.log(`Stage: ${stage} \nPoints: ${points} \n\n`);

      // this ensures that the random number stays the same during a stage
        if(changeNum === 1){
            random_num = Math.floor(Math.random() * max) + 1;
            changeNum--;
        }

      // prompt user for their guess
        let guess = prompt(`Predict a number between ${min} and ${max}: `);

        // check if player wants to end the game
        if (guess === safeword){
            console.log(`\nWell done ${username}! \nYou reached stage ${stage} and scored ${points} points with ${tries} tries! \nThanks for playing, see you next time ;)`);
            break;
        }

      // convert players guess to Number type 
        guess = Number(guess);

      // checks if correct or wrong 
        if(isNaN(guess)){
            console.log(`\nPlease enter a valid number within the range of ${min} and ${max} to play the game! \n`);
            continue;
        }else if(guess < min || guess > max){
            console.log(`\nPlease enter a number within the range of ${min} and ${max} to play the game! \n`);
            continue;
        }else if(guess !== random_num){
            console.log('\nWrong guess! Try again :) \n');
            tries++;
            continue;
        }else if(guess === random_num){
            console.log('\nCorrect answer!! You now have +1 point and have advanced to the next stage \n');
            points++;
            stage++;
            max++;
            changeNum++;
            tries++;
            continue;
        }
    }
}


// function call to start game 
// CHANGE RANGE VALUES HERE
guessGame(1, 2)