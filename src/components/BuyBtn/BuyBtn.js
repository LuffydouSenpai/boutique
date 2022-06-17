import "./BuyBtn.css"

function BuyBtn(props){

     return <button disabled={props.quantite  ?  false : true}>
        {props.quantite? "Acheter" : "Rupture"} <i className="fa-solid fa-cart-arrow-down"></i>
        </button>;
 }

 export default BuyBtn;