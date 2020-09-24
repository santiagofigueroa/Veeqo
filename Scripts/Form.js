// For HTML not to reload. 
var form = document.getElementById("StringsForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// 
function stringsToAlgo(){
    var num = document.getElementById('num').value;
    var s1 = document.getElementById('string1').value;
    var result = "";
    if(!!num || !!s1 ){ 
        ShowMessage("input"," Number :"+ num + "<br> String " +s1); 
        console.log(num +" "+ s1);
        var rot =  new Rot();
        result = rot.Rot(num,s1);
        // Result for output if any  
        ShowMessage( "output",result);   
    } else { 
        alert("One of the inputs are empty");  
    }
 
    // 
    console.log("Number: " + num +" String:  "+ s1);
    console.log(result);  
    return result; 
} 

 