import React, {useState} from 'react';
import Menu from "./components/Menu/Menu"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart";
import './App.css';
import { playlist } from "./playlist";
import BoutiqueContext from './BoutiqueContext';
import PlayerMp3 from './components/PlayerMp3/PlayerMp3';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayCart:false,
      playlistData:playlist,
      achat:[],
      addArticle:this.addArticle.bind(this),
      qteManager:this.qteManager.bind(this)
    }
  }
  stockManager(datakey,action){
    let playlistDataTmp = this.state.playlistData;
    if(action === "+"){
      playlistDataTmp[datakey].quantite-=1;
    }else{
      playlistDataTmp[datakey].quantite+=1;
    }
    this.setState({playlistData:playlistDataTmp});
  }

  //declaration des methode de App
  qteManager(dataKey,action){
    let achatTmp = this.state.achat;
    //j'ajoute un disc à mon tableau achat
    if(action === "+" && this.state.playlistData[dataKey].quantite > 0 ){
      this.stockManager(dataKey,action);
      achatTmp.push(dataKey);
    }
    //je retire un disc a mon tableau achat
    if(action === "-"){
      this.stockManager(dataKey,action);
      let stop = true;
      achatTmp.map((value,key) => {
        if(dataKey==value && stop){
          achatTmp.splice(key,1);
          stop = false;
        }
      });
    }
    //
    this.setState({achat:achatTmp}, ()=>{});
  }

  addArticle(dataKey){
    this.stockManager(dataKey,"+");
    let achatTmp = this.state.achat
    achatTmp.push(dataKey);
    this.setState({achat:achatTmp});
  }

  handleClick(){
    this.setState({displayCart:!this.state.displayCart});
  }

  render(){
     return (
     <BoutiqueContext.Provider value={this.state}>
      <div className="App">
        <header>
          <Menu action={()=>{this.handleClick()}}/>
        </header>
        <main>
          {this.state.displayCart?<div className='divCart'><Cart/></div> : ""}
          <Products listeDeLecture={this.state.playlistData}></Products>
        </main>
      </div>
      <PlayerMp3></PlayerMp3>
    </BoutiqueContext.Provider>

  );
  }

}

export default App;
