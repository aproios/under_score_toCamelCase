/*under_score_toCamelCase is a simple Javascript script to convert any under_score string to camelCase.

Ex: "Dont_cry_for_me_Argentina" converts to => "dontCryForMeArgentina" */


function underToCamel(str){
  
  str = str.toLowerCase();
  
  var underscore = "_";
  
  for(x = 0; x < str.length; x++){
   
    while(underscore.indexOf(str[x]) > -1){
      
      str = str.slice(0, x) + str[x+1].toUpperCase() + str.slice((x+2));
   
    }

  }
  
  return str;
  
}

// Test it out: // console.log(underToCamel("Camel_Case_to___Under_scorE"));
