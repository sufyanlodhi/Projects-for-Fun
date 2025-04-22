import { useEffect, useState, useCallback, useRef } from 'react';
import './App.css';

function App() {
  const [fruits, setFruits] = useState(["Banana", "Orange"]);
  const [recval, setRecval] = useState('');
  const inputref = useRef();

  useEffect(() => {
    if (recval.length > 5) {
      alert("You have entered more than 5 characters!");
    }
  }, [recval]);

  const addFruits = useCallback(() => {
    inputref.current.focus(); // 😎 yahan par main ne focua kia input ko 

    if (recval) {
      if (fruits.includes(recval)) {
        alert("Your value is same. Please enter another value");
      } else {
        setFruits([...fruits, recval]); 
        setRecval(''); 
      }
    } else {
      alert("Please Enter any Fruit name");
    }
    //console.log("Inside function");
    //console.log(fruits); 
  },[recval, fruits]);


  //console.log(addFruits);
  
  return (
    <>
      <ol>
        {fruits.map((value, index) =>
          <li key={index}>{value}</li>
        )}
      </ol>
      <input
        ref={inputref}
        type="text"
        value={recval}
        onChange={(e) => setRecval(e.target.value)}
      />
      <br /><br />
      <button onClick={addFruits}>Add Fruits</button>
    </>
  );
}

export default App;
