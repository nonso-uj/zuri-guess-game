const prompt = require('prompt-sync')();


// A Function 
function guessGame(min, max){
    let safeword = 'end';
    let stage = 1;
    let points = 0;
    let changeNum = 1;
    let random_num
    let tries = 0;


    let username = prompt('Please enter your username: ');
    console.log(`Welcome to The Guessing Game ${username}! \nTo end the game, type "end" into the prompt. \nGoodluck!! \n\n`);


    while(true){
        console.log(`Stage: ${stage} \nPoints: ${points} \n\n`);

        if(changeNum === 1){
            random_num = Math.floor(Math.random() * max) + 1;
            changeNum--;
        }

        let guess = prompt(`Predict a number between ${min} and ${max}: `);

        
        if (guess === safeword){
            console.log(`\nWell done ${username}! \nYou reached stage ${stage} and scored ${points} points with ${tries} tries! \nThanks for playing, see you next time ;)`);
            break;
        }
        
        guess = Number(guess);
        console.log(guess, random_num, isNaN(guess));

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



guessGame(1, 2)