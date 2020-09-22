class Rot { 
    resultArray = new Array();  
    numSytrings = 0 ;
    
// 
rot13(str){
    
    // works now counting chars
    for(var s in str){
        this.numSytrings ++;
        //console.log(s1.charAt(s));
        var tmp = str.charAt(s.input);
        // Checks when ever is a lower and that is not empty.
        if(tmp == tmp.toLowerCase() && tmp != " "){
          //  console.log(tmp);
          // 
          var char = codeToChar((tmp.charCodeAt(0) - 'a'.charCodeAt(0)+13) ) 
          //
          this.resultArray.push(char);
        }
    
    }
    return this.resultArray; 
}


}