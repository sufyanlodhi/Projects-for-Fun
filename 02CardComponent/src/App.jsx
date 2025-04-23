import React from "react";
import { useEffect, useState } from "react";
import Card from "./Component/Card";
function App() {
  const [data, setData] = useState([]); // Step 1: State banayi

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const result = await res.json();
      console.log(result);
      
      setData(result); // Step 2: State update
    }

    fetchData(); // Step 3: Function call
  }, []);

  return (
    <div className="Global-Screen justify-center flex gap-5 flex-wrap justify-items-center-safe">

   
      {/* Implicit Return: Direct return */}
      {data.map((obj, i) => (// Step 4: JSX return
      
          
          <Card img={obj.image} price={obj.price} des={obj.description}/>
         
      ))
      }


      {/* Explicit Return:
      {data.map((obj, i) => {
        return <li key={i}>{obj.title}</li>
      })} */}

    </div>



    


  );
}

export default App;


// category

// description

// id

// image

// price

// rating

// count


// rate
