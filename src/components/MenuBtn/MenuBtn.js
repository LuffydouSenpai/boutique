import "./MenuBtn.css"
/* exemple de component avec fonction fléchée SANS RETURN */

/* const MenuBtn = (props)=>{
    <div></div>
} */

function MenuBtn(props){
    return <div>{props.children}</div>
}


export default MenuBtn;