 class Rot { 

  
  rot(tmpI,tmpS){
    
    var resultStr  = ""; 
    // Regex E 
    var lower = /[a-z]/g;
    var upper = /[A-Z]/g;
    // works now counting chars
      for(var i in tmpI ){  
          // 
          var char = "";
          console.log(tmpI[i]);
            if(tmpI[i].match(lower)){
              char =  spacesCount( tmpI[i],false,tmpS);
              resultStr += char;
            } else if (tmpI[i].match(upper)){
               char = spacesCount(tmpI[i],true,tmpS);
               resultStr += char;
            }else {
              console.log(tmpI[i]); 
              resultStr += tmpI[i].toString();
            }
            //resultStr += "|";
       } 
    console.log(resultStr);
    return resultStr; 
}

//  Function implementing the ROT-13 algorithm   
rot13(iArr){
    // 
    var resultArray = new Array(50);
    //Regex used to check Upper and lower case  letters
    var lower = /[a-z]/g;
    var upper = /[A-Z]/g;
  //
    var resultString ;
    for(var s in iArr){
        //console.log(s1.charAt(s));
        var tmp = iArr[s].input;
        console.log(tmp);
        resultString = "";
        // Checks when ever is a lower and that is not empty.
      for(var i in tmp ){  
          // 
          var char = "";
        
          //console.log(tmp[i]);
            if(tmp[i].match(lower)){
              // Rot- 13 Hard coded to method.
              char =  spacesCount(tmp[i],false,13);
             //  resultArray.push(char);
             resultString += char;
            } else if (tmp[i].match(upper)){
               char = spacesCount(tmp[i],true,13);
               //resultArray.push(char);
               resultString += char;
            } else {
              console.log(tmp[i]); 
              //var str = tmp[i].toString();
              resultString += tmp[i].toString();;
            }
       } 
      //this.resultString += "|";
      console.log(resultString);
      resultArray.push(resultString);
    }
    //console.log(resultArray);

    return resultArray; 
  }


}