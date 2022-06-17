import Card from "../Card/Card";
import { playlist } from "../../playlist";
import "./Products.css";


function Products(props) {
    return(
        <div>
            <h2>Vos Musique :</h2>
            <div className="cardContainer">
                {
                    playlist.map(function(value,key){
                    return (<Card
                                key = {key}
                                cover = {value.cover}
                                title = {value.title}
                                artist = {value.artist}
                                genre = {value.genre}
                                annee = {value.annee}
                                prix = {value.prix}
                                quantite = {value.quantite}
                                >{value.description}
                            </Card>)
                    })
                }     
            </div>
        </div>
    )
}
export default Products;