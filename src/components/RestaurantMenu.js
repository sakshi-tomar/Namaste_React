import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = ()=>{
  
    const[resInfo,setResInfo]= useState(null);

    const {resId} = useParams();


    useEffect(()=>{
        fetchMenu();
      },[]);
    
      const fetchMenu = async()=>{
        const data = await fetch(
          MENU_API+resId );
        const json = await data.json();
        setResInfo(json.data);
      };
if (resInfo===null) return(<Shimmer/>)
      const {name, cuisines , costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
      const{itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
      // console.log(itemCards);
 return(
  
    <div className="menu">
        {/* <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1> */}
        <h1>{name}</h1>
        <h3><span>{cuisines.join(", ")} - {costForTwoMessage}</span></h3>
        <h3></h3>
        <h1>Menu</h1>
        <ul>
        {itemCards.map((item)=>(
          <li key ={item.card.info.id}>
          {item.card.info.name} -{" Rs "}
          {item.card.info.price/100} 
          </li>
        ))}   
        </ul>
    </div>
    
 )
}
export default RestaurantMenu;