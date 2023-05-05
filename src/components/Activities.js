import React, {useState} from "react";
import axios  from "axios";






function Activities() {

  const [randomAdvice, setRandomAdvice] = useState("");
  
  axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      setRandomAdvice(response.data.slip.advice);
        
    })
    .catch((error) => {
        console.log(error);
    });  



  return(  
      <div>
          <h1>And on the end a small every day avdice from us to bright up yur day - "{randomAdvice}"</h1>
          <br /><br /><br />
          <br /><br /><br />
          <br />
      </div>
  );
  
}

export default Activities;