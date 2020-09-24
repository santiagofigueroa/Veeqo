
console.log("Veqoo");
// Run Setup (program)
var ressArr =  new Array();

setup();

ressArr = getResArr();
if(ressArr.length > 1 ){ 
  ShowMessage("q1out",ressArr.trim());  
} 
console.log("End program"); 