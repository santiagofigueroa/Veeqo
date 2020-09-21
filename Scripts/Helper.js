//Displays data at front-end 
function ShowMessage(id, message) { 

    if(!!id && !!message) {
        document.getElementById(id.toString()).innerHTML = message;
    } else {
        console.log("ID or messag is null ");
    }
}

// Char function. 
function codeToChar(indexC){ 
    var alphabet = ["a","b","c","d","e","f",
                    "g","h","i","j","k","l",
                    "m","n","o","p","q","r",
                    "s","t","u","v","w","x",
                    "y","z"];
    var char =   alphabet[indexC];
    return char;
} 
