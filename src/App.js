import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  const [details, setDetails] = useState([])

  const nameRef=useRef();
  const dobRef=useRef();
  const phoneRef=useRef();

  function handleForm(e){
    const name= nameRef.current.value;
    const dob= dobRef.current.value;
    const phone = phoneRef.current.value;
    if(name==="" | dob==="" | phone==="" ){
      return console.log(name);
    } else{
      setDetails (prevDetails =>
        { return [ ...prevDetails, {name:name, dob:dob, phone:phone,}]
      })
      console.log(details)
      nameRef.current.value=null
    }
  }

  return (
    <div className="App">
      Name : 
      <input type={"text"} ref={nameRef}></input><br/>
      DOB :
      <input type={"date"} ref={dobRef}></input><br/>
      Phone :
      <input type={'number'} ref={phoneRef}></input><br/>
      <button type='submit' onClick={handleForm}>Submit</button><br/>
    </div>
  );
}

export default App;
