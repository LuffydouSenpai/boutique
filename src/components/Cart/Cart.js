import React,{useContext} from 'react';
import BoutiqueContext from '../../BoutiqueContext';
import CartBtn from "../CartBtn/CartBtn"
import "./Cart.css"



function Cart(props){
    const data = useContext(BoutiqueContext);
    let totalCart = 0;

    const countOccurences=(tab)=>{
        tab = tab.sort();
        let result = {};
        tab.forEach((elem)=>{
            if(elem in result){
                result[elem] = ++result[elem];
            }
            else{
                result[elem] = 1;
            }
        });
        return result;
    }
    /* console.dir(countOccurences(data.achat)) */
     return(
        <div className="cart">
            <h2>Panier :</h2>
            <table>
                <thead>
                     <tr key="">
                        <td>image</td>
                        <td>titre</td>
                        <td>prix unitaire</td>
                        <td>sous-total</td>
                        <td>quantité</td>
                        <td>action</td>
                    </tr> 
                </thead>
                 <tbody>
                    {
                        Object.keys(countOccurences(data.achat)).map((entree,cle)=>{
                            /* console.dir(entree);
                            console.dir(countOccurences(data.achat)[entree]); */
                            let quantite = countOccurences(data.achat)[entree];
                            totalCart += data.playlistData[entree].prix*quantite
                            return(
                                <tr key={entree}>
                                    <td><img src={data.playlistData[entree].cover} alt={data.playlistData[entree].title} /></td>
                                    <td>{data.playlistData[entree].title}</td>
                                    <td>{data.playlistData[entree].prix}</td>
                                    <td>{Math.round((data.playlistData[entree].prix*quantite)*100)/100}</td>
                                    <td>{quantite}</td>
                                    <td>
                                        <CartBtn cle={entree}>+</CartBtn>
                                        <CartBtn cle={entree}>-</CartBtn>
                                    </td>
                                </tr>
                            )
                        })
                    }
                 </tbody>
            </table>
            <div className='totalPrix'>Total de votre panier : {Math.round(totalCart * 100) / 100} €</div>
            {/* insertion de mes produit acheté */}
        </div>
        
    )  
}

export default Cart;