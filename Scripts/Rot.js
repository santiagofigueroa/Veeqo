class Rot { 
    //resultArray = new Array();  
    
rot13(iArr){
    
    var resultArray = [];
    // works now counting chars
    for(var s of iArr){
        //console.log(s1.charAt(s));
        var tmp = s.input;
        console.log(tmp);
        var  lower = 0;
        var upper = false; 
        // Checks when ever is a lower and that is not empty.
      for(var i in tmp ){  
          console.log(tmp[i]);
            if(tmp[i] == tmp[i].toLowerCase() && tmp[i] != " "){
              lower = tmp[i].charCodeAt(0) - 'a'.charCodeAt(0);
            } else if (tmp[i] == tmp[i].toUpperCase() && tmp[i] != " "){
               upper = true;
               lower = tmp[i].charCodeAt(0) - 'A'.charCodeAt(0);
            }else {
              console.log(tmp[i]); 
              resultArray.push(tmp[i]);
            }

          console.log(lower);
            if (lower >  0  && lower < 26 ){
                 console.log(lower);
                 var char = codeToChar((lower + 13) % 26); 
                 //
                 console.log(char); 
                 if (upper) char = char.toUpperCase();
                 resultArray.push(char);
               }    
       } 
    
    }

    console.log(resultArray);
    return resultArray; 
}


}