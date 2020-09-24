//Displays data at front-end 
function ShowMessage(id, message) { 

    if(!!id && !!message) {
        document.getElementById(id.toString()).innerHTML = message;
    } else {
        console.log("ID or messag is null ");
    }
}


function spacesCount (tmp,upper,skip){
    var  spac = 0;
    var a = "a";
    var retChar = "";
    // Implementing new feature for ROT algorithm 
    if (skip === null) skip = 13; 
  
    if (upper) a = "A";
    // Spaces that will need to skip for and If passes then will be a reminder of 26 as the alphabets.  
    spac = ((tmp.charCodeAt(0) - a.charCodeAt(0) + skip) % 26);
  
    var retChar = codeToChar(spac);
  
    if (upper) retChar = retChar.toUpperCase();
    return  retChar;
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
  function PrintIn(data){ 
    var tempData = "<p> <ol type ='A'>";
     for (s in data) {
        tempData +=  "<li> Rotation: "; 
        tempData +=  JSON.stringify(data[s].skip);
        tempData += "<br>" 
        tempData +=  " String Input: "; 
        tempData +=  JSON.stringify(data[s].input);    
        tempData +=  "</li> <br>"; 
     }

     tempData += " </p> <ol>";
     console.log(tempData);  
     return tempData;        

 }


 function PrintOut(data){ 
  var tempData = "<p> <ol type ='A'>";
   for (s in data) {
      tempData +=  "<li> "; 
      tempData +=  " String Output: "; 
      tempData +=  JSON.stringify(data[s]);    
      tempData +=  "</li> <br>"; 
   }
   tempData += " </p> <ol>";
   console.log(tempData);  
   return tempData;        

}




