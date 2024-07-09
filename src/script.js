let userName = "";

document.getElementById("eightBallForm").onsubmit = function (event) {
  event.preventDefault();
  askEightBall();
};

function askEightBall() {
  let userQuestion = document.getElementById("userQuestion").value;
  userName = document.getElementById("userNameID").value; // Removed let to use the global userName variable

  // .trim()checks to see whether there are any whitespaces // Checks to see if the user has entered a question and their name
  if (userQuestion.trim() === "" || userQuestion === "") {
    alert("Please write a question and your name to ask the Magic 8-Ball!");
    return; // Added return to stop the function if no question is asked
  }

  let ballComment = (document.getElementById(
    "ballComment"
  ).innerText = `Let's see what the magic-ball has to say to ${userName}'s question..`); // Added a comment to the user

  // Create an array to store the eight-ball messages
  const eightBallMessages = [
    "It is certain",
    "It is decidedly so",
    "Reply hazy try again",
    "Cannot predict now",
    "Do not count on it",
    "My sources say no",
    "Outlook not so good",
    "Signs point to yes",
  ];

  // Generate a random index between 0 and 7
  const randomIndex = Math.floor(
    Math.random() * (eightBallMessages.length - 1)
  );

  // Get the eight-ball message using the random index
  const eightBallMessage = eightBallMessages[randomIndex];
  console.log(eightBallMessage); // Log the message
  document.getElementById("eightBallOutput").innerText = eightBallMessage; // Display the message to the user
}

/* userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');
    console.log(`${userName} asks: ${userQuestion}`)*/
