
function getValue(){
    document.getElementById("alert").classList.add("invisible");
   let userString =  document.getElementById("userString").value;
   userString = userString.toLowerCase(userString);
   //remove space and special characters.
   let regex = /[^a-z0-9]/gi;
   userString = userString.replace(regex,"");
   let returnObj = checkForPalindrome(userString);
   display(returnObj,userString);
}

//check if a given string is palindrome or not!
function checkForPalindrome(userString){

    let revString = [];
    for( let i =userString.length-1;i>=0;i--)
{
    revString+=userString[i];
} 

return revString;
}

function display(returnObj,userString){
    if(returnObj==userString){
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("msg").innerHTML = `Congrats it's a palindrome!`;
        document.getElementById("alert").classList.remove("invisible");
        document.getElementById("alert").classList.remove("alert-danger");
    }
    else{
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("msg").innerHTML = `Sorry it's not a palindrome!`;
        document.getElementById("alert").classList.remove("invisible");
        document.getElementById("alert").classList.remove("alert-success");
    }
}