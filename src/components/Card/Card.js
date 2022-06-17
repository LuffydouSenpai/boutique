import BuyBtn from "../BuyBtn/BuyBtn";
import "./Card.css";

function Card(props){
return <div className="card">
    <img src={props.cover} alt={props.title} className="cardImg"/>
    <h3 className="cardTitle">{props.title}</h3>
    <div className="cardInfos">{props.artist} - {props.genre} - {props.annee}</div>
    <p className="cardDescription">{props.children}</p>
    <div className="cardBtn">
        {/* component CartBtn avec */}
        <BuyBtn quantite={props.quantite}/>
    </div>
    <div className="cardPrix">{props.prix}€</div>
</div>
}

export default Card;