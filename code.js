// a function to play craps 
// this script was created by:alejandro alaniz
function playCraps(){
console.log("placraps() started")
// step 1. roll 2 6 sided dice
var die1;
var die2;
die1 = Math.ceil(6 * Math.random());
die2 = Math.ceil(6 * Math.random());
// step 1b print results 
document.getElementById("die1Res").innerHTML = die1;
document.getElementById("die2Res").innerHTML = die2;
console.log("die1 is;" + die1);
console.log("die2 is;" + die2);
//step 2. calculate the sum of die 1 and die 2
var diceSum = die1 + die2;
console.log("the sum of the dice is;" + diceSum);
document.getElementById("dieSum").innerHTML = diceSum;
//*if(conditions for true){do this if conditions are true}else



//step 3. dose the sum equal 7 or 11, are you a loser

if(diceSum==7||diceSum==11){
    document.getElementById("gameRes").innerHTML = "too Bad Brother, you lose";
    
//step 4. did the dice come up double> are they even? if so you win
}else if(die1==die2 && die1%2 == 0){
    document.getElementById("gameRes").innerHTML = "You Win";


//step 5. outherwise push
}else {
    document.getElementById("gameRes").innerHTML = "you did not lose, please play again";
}


}
//chechCreds fuction
function checkCreds(){
    console.log("checkCreds started");
    document.getElementById("loginStatus").innerHTML = "Status of login"
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    
//this will store the characters in fName in the firstName var
firstName = document.getElementById("fName").value;
console.log("the first name inputed as " + firstName);
//this will store the characters in lName in the lastName var
lastName = document.getElementById("lName").value;
console.log("the last name inputed as " + lastName);
//this will store the characters in ZIPCode in the zipeCode var
zipCode = document.getElementById("zipCode").value;
console.log("the zip inputed as " + zipCode);
//this will store the combined characters of fName and lname in the fullName var
fullName = firstName + " " + lastName;
console.log("your full name is " + fullName);

fullNameLength = fullName.length;
console.log("the full name has " + fullNameLength +" characters");
//if the length of the name is more then 20 itll display false
if(fullNameLength > 20){
document.getElementById("loginStatus").innerHTML = "Invalid Name, please try again"
//else if the zipe is more or less the 5 numbers the itll display false
} else if(zipCode.length != 5){
    document.getElementById("loginStatus").innerHTML = "Invalid Zip, please try again"
//else both are correct then a alert will display
} else{
alert("user credientals passed, welcome to the site, " + fullName);
}


}
//this is the start too the fuction that will move the meme
function startFun(){
    //this is a log thatll let me know thta the fuction started 
console.log("startFun() started");
document.getElementById("startButton").disabled = true;
document.getElementById("stopButton").disabled = false;
var elem = document.getElementById('memePic'), pos = 0,
        timer = setInterval(function() {
            pos++;
            elem.style.left = pos+"px";
            if( pos == 200) clearInterval(timer);
        },25);
        //this is the function that lets the img move
}

function
stopFun(){

console.log("stopFun() started")
document.getElementById("startButton").disabled = false;
document.getElementById("stopButton").disabled = true;
}


function checkPalin(){
//check to see if a sentence is a palindrome
console.log("checkPalin() started")

//extract the entered text to a string variable called entString
var entStr;
entStr = document.getElementById("palinInput").value;
console.log("the text eneterd is: " + entStr);
//remove spaces from the string
var entStrNoSpace =  entStr.split(" ").join("");
console.log("no spaces = " + entStrNoSpace);
//create a new variable called revStr and store the entered string reversed here
var revStr;
const revArray = [];
length = entStrNoSpace.length - 1;
console.log("string length = " + length);
for(let i = length; i >=0; i--){
    revArray.push(entStrNoSpace[i]);
}
revStr = revArray.join("");
console.log("reversed is: " + revStr);
//copare entString to revString 
var equal = 0;
equal = (entStrNoSpace === revStr);
console.log(equal);
//give notice of equality status
if(equal == true){
    document.getElementById("palinStatus").innerHTML = entStr + " is a palindrome!"
}else {
    document.getElementById("palinStatus").innerHTML = entStr + " is not palindrome!"
}

}