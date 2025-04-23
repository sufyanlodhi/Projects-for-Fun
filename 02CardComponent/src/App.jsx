import { useEffect } from "react";

function App() {

  useEffect(() => {
    //Define Dom Element variable
    const renderData = document.querySelector(".renderData");

    // Getting data from API
    async function getData() {
      const res = await fetch("https://fakestoreapi.com/products"); // aik data a raha hai api se 
      const data = await res.json(); // jab data ajaye to usey Json main convert krega or Data Var main complete array save hoga

      //map use: mujhe jo array api se mila hai us main objects hain or sb k upar aik aik kar k main ne taverse kia hai ta k all data ko access krsakun
      data.map((obj) => {    
        //creating element
        let sep_div = document.createElement("div");
        
        let img_ele = document.createElement("img");
        let title_Ele = document.createElement("p");
        let price_Ele = document.createElement("p"); 
        let btn_Ele = document.createElement("button"); 
        let btntxt = document.createTextNode("Add to Cart");
        btn_Ele.appendChild(btntxt);

        // Access data from API
        let objTitle = document.createTextNode(obj.title); // yahan per main ne api se title ko lekar aya or var k under store kia   
        let objprice = document.createTextNode(`Price: $${obj.price}`); // yahan per main ne api se price ko lekar aya or var k under store kia
        img_ele.setAttribute("src", obj.image); // img element jo create hua hai us main src k zariye main ne image ki location di hai.
        img_ele.className = "images";
      
        // Access kiye huye data ko appendchild kia elements main
        title_Ele.appendChild(objTitle);
        price_Ele.appendChild(objprice);
        
        //renderData div hai mera jo dom hai
        sep_div.appendChild(img_ele); 
        sep_div.appendChild(title_Ele);
        sep_div.appendChild(price_Ele);
        sep_div.appendChild(btn_Ele);

        renderData.appendChild(sep_div);

        // Function create kara hai jo images or price ko print kr raha hai button k zariye
        btn_Ele.addEventListener("click", () => addtocart(obj.image, obj.price));
        
        function addtocart(img, price) {
          console.log("My Image : " + img);
          console.log("My Image : " + price);
        }
      });
    }

    getData();
  }, []); // <- sirf ek baar chalega jab component render ho

  return (
    <>
      <div className="renderData"></div>
    </>
  );
}

export default App;
