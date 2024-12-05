import RestaurantCard from "../RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredRestaurants,setfilteredtRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredtRestaurants( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaturants = listOfRestaurants.filter((res) => {
              return res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase());
                // console.log(name);
              });
              setfilteredtRestaurants(filteredRestaturants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
