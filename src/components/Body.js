import RestaurantCard from "../RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";
const Body =()=>{
    const[listOfRestaurants,setListOfRestaurants] = useState(resList);
     return(
        
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    filteredRestaurants = listOfRestaurants.filter((res)=>res.data.avgRating>4);
            setListOfRestaurants(filteredRestaurants);
                }}>Filter</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}


export default Body;