let userName = '';

document.getElementById('eightBallForm').onsubmit = function(event) {
    event.preventDefault()
    askEightBall()
};

function askEightBall() {
    let userQuestion = document.getElementById('userQuestion').value
    userName = document.getElementById('userNameID').value; // Removed let to use the global userName variable

    // .trim()checks to see whether there are any whitespaces // Checks to see if the user has entered a question and their name
    if (userQuestion.trim() === '' || userQuestion === '') {
        alert('Please write a question and your name to ask the Magic 8-Ball!')
        return; // Added return to stop the function if no question is asked
    }

     let ballComment = document.getElementById('ballComment').innerText = `Let's see what the magic-ball has to say to ${userName}'s question..`; // Added a comment to the user


    // Added a random number generator to determine the eight-ball message
    const randomNumber = Math.floor(Math.random() * 8);
    // Provided a variable to store the eight-ball message
    let eightBallMessage = ''

    // Switch statement to determine the eight-ball message
    switch (randomNumber) {
        case 0:
            eightBallMessage = 'It is certain'
            break;
        case 1:
            eightBallMessage = 'It is decidedly so'
            break;
        case 2:
            eightBallMessage = 'Reply hazy try again'
            break;
        case 3:
            eightBallMessage = 'Cannot predict now'
            break;
        case 4:
            eightBallMessage = 'Do not count on it'
            break;
        case 5:
            eightBallMessage = 'My sources say no'
            break;
        case 6:
            eightBallMessage = 'Outlook not so good'
            break;
        case 7:
            eightBallMessage = 'Signs point to yes'
            break;
    }

    console.log(eightBallMessage); // Log the message
    document.getElementById('eightBallOutput').innerText = eightBallMessage; // Display the message to the user
}


/* userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');
    console.log(`${userName} asks: ${userQuestion}`)*/