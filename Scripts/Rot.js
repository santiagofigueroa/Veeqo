class Rot { 

  rot(iArr){
    
    var resultArray = [];
    // works now counting chars
    for(var s of iArr){
        //console.log(s1.charAt(s));
        var tmpI = s.input;
        var tmpO = s.expec; 
        var tmpS = s.skip ;
        
        console.log(tmp);
        
      
        // Checks when ever is a lower and that is not empty.
      for(var i in tmp ){  
          // 
          var char = "";
          console.log(tmp[i]);
            if(tmpI[i] == tmp[i].toLowerCase() && tmpI[i] != " "){
              char =  spacesCount( tmpI[i],false);
               resultArray.push(char);
            } else if (tmpI[i] == tmpI[i].toUpperCase() && tmpI[i] != " "){
               char = spacesCount(tmpI[i],true);
               resultArray.push(char);
            }else {
              console.log(tmpI[i]); 
              resultArray.push(tmpI[i].toString());
            }

  
       } 
    
    }

    console.log(resultArray);
    return resultArray; 
}



 
    
rot13(iArr){
    
    var resultArray = [];
    // works now counting chars
    for(var s of iArr){
        //console.log(s1.charAt(s));
        var tmp = s.input;
        console.log(tmp);
        
      
        // Checks when ever is a lower and that is not empty.
      for(var i in tmp ){  
          // 
          var char = "";
          console.log(tmp[i]);
            if(tmp[i] == tmp[i].toLowerCase() && tmp[i] != " "){
              char =  spacesCount( tmp[i],false);
               resultArray.push(char);
            } else if (tmp[i] == tmp[i].toUpperCase() && tmp[i] != " "){
               char = spacesCount(tmp[i],true);
               resultArray.push(char);
            }else {
              console.log(tmp[i]); 
              resultArray.push(tmp[i].toString());
            }

  
       } 
    
    }

    console.log(resultArray);
    return resultArray; 
}

 

}