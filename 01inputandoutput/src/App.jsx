import { useEffect, useState, useCallback, useRef } from 'react';
import './App.css';

function App() {
  const [fruits, setFruits] = useState([]);
  const [recval, setRecval] = useState('');
  const inputref = useRef();

  useEffect(() => {
    if (recval.length > 5) {
      alert("You have entered more than 5 characters!");
    }
  }, [recval]);



  const addFruits = useCallback(() => {
    inputref.current.focus(); // 😎 yahan par main ne focus kia input ko 
    if (recval) {
      if (fruits.includes(recval)) {
        alert("Your value is same. Please enter another value");
      } else {
        setFruits([...fruits, recval]);
        console.log([...fruits, recval]);
        setRecval('');
      }
    } else {
      alert("Please Enter any Fruit name");
    }
    // console.log("Inside function");
    // console.log(fruits); 
  }, [recval, fruits]);



  {/* 😎 yahan par main ne filter lagaya hai ta k jo map main loop chala hai index 
  main jo bhi number hai uska match karo puri fruits list se jo 
  match hojaye wo false kr k out kr or jo match na ho usey updated fruits new list main add kro */}

  function removevalue(index) {
    const updatedfruits = fruits.filter((ele, id) => {
      return index != id;
    })
    setFruits(updatedfruits)
    console.log(updatedfruits);
  }



  return (
    <>
      <div>
        {fruits.map((value, index) =>
          <p key={index}>{value}
            <button onClick={() => removevalue(index)}>Remove</button></p>
        )}
      </div>


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
