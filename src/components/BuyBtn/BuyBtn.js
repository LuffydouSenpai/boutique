import React, {useContext} from 'react';
import BoutiqueContext from '../../BoutiqueContext';
import "./BuyBtn.css"

function BuyBtn(props){
   const data = useContext(BoutiqueContext);

   return <button 
   disabled={data.playlistData[props.dataKey].quantite  ?  false : true}
   onClick={()=>{data.addArticle(props.dataKey)}}
   >
      {data.playlistData[props.dataKey].quantite ? "Acheter" : "Rupture"} <i className="fa-solid fa-cart-arrow-down"></i>
   </button>;
 }

 export default BuyBtn;