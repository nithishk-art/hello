import React from "react";

function Result({term,secertNum}) {
    let result;
    

    if(term) {
      if(term > secertNum) {
        result ='Higher';
      }else if(term < secertNum){
        result ='lower';
      }else if(term === secertNum){
      result = "wow! correct";
      }        
    }
     return <h3> you guessed: {result}</h3>
}
   
export default Result;