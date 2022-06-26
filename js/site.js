// get the user string
function getString(){
    document.getElementById("alert").classList.add("invisible");
     let userString = document.getElementById("getString").value;
     let returnObj= palindrome(userString);
    display(returnObj);
}

//check if it's palindrome or not
function palindrome(userString){
//converts into lower case
userString = userString.toLowerCase();
let regex = /[^a-z0-9]/gi;
userString= userString.replace(regex,"");
let rev = [];
let returnObj={};
for(let i=userString.length-1;i>=0;i--){
    rev+=userString[i];
}
if(rev == userString){
    returnObj.msg = "Well done! You entered a palindrome!";
}
else{
    returnObj.msg = "Sorry! You did not enter a palinrome!";
}
returnObj.reversed = rev;
return returnObj;
}
//dispaly the message
function display(returnObj){
document.getElementById("alertHeader").innerHTML = returnObj.msg;
document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
document.getElementById("alert").classList.remove("invisible");
}