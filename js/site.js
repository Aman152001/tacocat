//gets the value from the page
function getValue(){
    document.getElementById("alert").classList.add("invisible");
   let userString =  document.getElementById("userString").value;
   userString = userString.toLowerCase(userString);
   //remove space and special characters.
   let regex = /[^a-z0-9]/gi;
   userString = userString.replace(regex,"");
   let reverseString = revString(userString);
   display(reverseString,userString);
}

//gets the reverse string
function revString(userString){

    let revString = [];
    for( let i =userString.length-1;i>=0;i--)
{
    revString+=userString[i];
} 

return revString;
}

//checks if the given reverse string is same as user input string
function display(reverseString,userString){
    if(reverseString==userString){
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("msg").innerHTML = `Congrats it's a palindrome!`;
        
        document.getElementById("alert").classList.remove("alert-danger");
    }
    else{
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("msg").innerHTML = `Sorry it's not a palindrome!`;
        document.getElementById("alert").classList.remove("alert-success");
    }
    document.getElementById("alert").classList.remove("invisible");
}
