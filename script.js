var answer = Math.floor(Math.random() * 100) + 1;

var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
    var user_guess = document.getElementById('guess').value;
    if (user_guess < 1 || user_guess > 100 ){
        alert("Your guess should between 1 and 100 numbers. Try Again.." );
    }
else{
    no_of_guesses += 1;
    guessed_nums.push(user_guess);

    if(user_guess < answer){
        msg1.textContent ="Your guess is too low..";
        msg2.textContent ="Number of Guesses: " + no_of_guesses;
        msg3.textContent ="Guessed Numbers: " + guessed_nums + ',';
    }
    else if(user_guess > answer){
        msg1.textContent ="Your guess is too High..";
        msg2.textContent ="Number of Guesses: " + no_of_guesses;
        msg3.textContent ="Guessed Numbers: " + guessed_nums + ',';
    }
    else if(user_guess == answer){
        msg1.textContent ="Hurrah! It is correct. You Win!!!";
        msg1.style.color = "green";
        msg1.style.fontSize = "25px";
        msg1.style.fontWeight = "600";
        msg1.style.lineHeight = "5";
        msg2.textContent ="The number was: "  +  answer;
        msg3.textContent ="You Guesssed the number in " + no_of_guesses + " guesses";
        document.getElementById("btn").hidden = "true";
    }
 }
}
