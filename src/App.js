import React, { useState } from 'react';
import Menu from "./components/Menu/Menu"
import Products from "./components/Products/Products"
import Panier from "./components/Panier/Panier";
import './App.css';

function App(props) {
  const [displayPanier, setDisplayPanier] = useState(false);
  function handleClick(){
    setDisplayPanier(!displayPanier);
  }

  return (
    <div className="App">
      <header>
        <Menu action={()=>{handleClick()}}/>
      </header>
      <main>
        {/*
         if(displayPanier=== true){
          <Panier/>
        }else{
          ""
        }
         */}
        {displayPanier?<Panier/> : ""}
        <Products/>
        
      </main>
    </div>
  );
}

export default App;
