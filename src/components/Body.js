import RestautantCard from "./RestautantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restrautantList, setRestrautantList] = useState([]);
  const [displayResList, setDisplayList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9243691&lng=77.4982704&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestrautantList(
      json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setDisplayList(
      json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleTopratedClick = () => {
    let filteredList = restrautantList.filter(
      (res) => res.info.avgRatingString > 4
    );
    setDisplayList(filteredList);
  };

  if (restrautantList.length === 0) {
    return <Shimmer />;
  }
  const onInputHandler = (event) => {
    setInputValue(event.target.value);
  };
  const onSearchHandler = () => {
    let filterSearchedList = restrautantList.filter((res) =>
      res.info.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setDisplayList(filterSearchedList);
  };
  return (
    <div className="body">
      <div class="list-header">
        <div className="box-align">
          <button onClick={handleTopratedClick}>Top Rated Restrautant</button>
        </div>
        <div className="searchbar box-align">
          <input value={inputValue} onChange={onInputHandler} />
          <button onClick={onSearchHandler}>Search</button>
        </div>
      </div>

      <div className="res-container">
        {displayResList.map((res) => {
          return <RestautantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
