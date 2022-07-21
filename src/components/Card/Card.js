import BuyBtn from "../BuyBtn/BuyBtn";
import BoutiqueContext from "../../BoutiqueContext";
import "./Card.css";

function Card(props){
return <div className="card">
    <img src={props.cover} alt={props.title} className="cardImg"/>
    <h3 className="cardTitle">{props.title}</h3>
    <div className="cardInfos">{props.artist} - {props.genre} - {props.annee}</div>
    <p className="cardDescription">{props.children}</p>
    <div className="cardBtn">
        {/* component CartBtn avec */}
        <BuyBtn dataKey={props.dataKey}/>
    </div>
    <div className="cardPrix">{props.prix}€</div>
    <div className="cardEssaie" onClick={()=>{console.log(true)}}>essaie</div>
</div>
}

export default Card;