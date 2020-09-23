// Data to be returned.
var resData = Array(50);
// Set
async function setup(){
    var data = [];
    var result = [];
 
    console.log(document.readyState);  
      var xhp  = new XMLHttpRequest();
      xhp.responseText = "text";
      
      // Makes sure connection has being stablish
    xhp.onreadystatechange = await function (){
        if (xhp.readyState === 4 && xhp.status === 200){
          
            console.log("Success");
           if(xhp.responseText){  
            data = JSON.parse(xhp.responseText);
            // 
            console.log(data); 
            data.forEach(function(element) {
                result.push(element);
            });
            console.log(result);
            var strData = JSON.stringify(result);  
            ShowMessage("q1in",strData);
            console.log(result);

            if(result.length > 0){
              //Rot-13 algo function   
              var rot =  new Rot();
              rot.rot13(result); 
              } 
            
          }
        }
      };
      xhp.open('GET','Data/data.json',true);
      xhp.send();

   
     
      return  result; 
  }