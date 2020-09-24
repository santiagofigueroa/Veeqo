 class Rot { 

  
  rotAlgo(tmpI,tmpS){
    
    var resultStr  = ""; 
    // Regex E 
    var lower = /[a-z]/g;
    var upper = /[A-Z]/g;
    // works now counting chars
    console.log(typeof tmpI);
      for(var i in tmpS ){  
          // 
          var char = "";
          console.log(tmpS[i]);
            if(tmpS[i].match(lower)){
              char =  spacesCount( tmpS[i],false,tmpI);
              resultStr += char;
            } else if (tmpS[i].match(upper)){
               char = spacesCount(tmpS[i],true,tmpI);
               resultStr += char;
            }else {
              console.log(tmpS[i]); 
              resultStr += tmpS[i].toString();
            }
            //resultStr += "|";
       } 
    console.log(resultStr);
    return resultStr; 
}

//  Function implementing the ROT-13 algorithm   
rot13(iArr){
    // 
    var resultArray = new Array();
    //Regex used to check Upper and lower case  letters
    var lower = /[a-z]/g;
    var upper = /[A-Z]/g;
  //
    var resultString ;
    for(var s in iArr){
        //console.log(s1.charAt(s));
        var tmp = iArr[s].input;
        var num = iArr[s].skip;
        console.log(tmp);
        resultString = "";
        // Checks when ever is a lower and that is not empty.
      for(var i in tmp ){  
          // 
          var char = "";
        
          //console.log(tmp[i]);
            if(tmp[i].match(lower)){
              // Rot- 13 Hard coded to method.
              char =  spacesCount(tmp[i],false,num);
             //  resultArray.push(char);
             resultString += char;
            } else if (tmp[i].match(upper)){
               char = spacesCount(tmp[i],true,num);
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