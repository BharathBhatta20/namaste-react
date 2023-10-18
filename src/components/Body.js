import RestautantCard from "./RestautantCard";
import ResList from "../../jsonConfig";
import { useState } from "react";

const Body = () => {
  const[restrautantList,setrestrautantList]=useState(ResList);
  const handleTopratedClick =() =>{
    let filteredList = restrautantList.filter(res=> res.info.avgRatingString >4)
    setrestrautantList(filteredList)
  }
  return (
    <div className="body">
      {/* <div className="searchbar">Search</div> */}
      <div className="top-res">
        <button onClick={handleTopratedClick}>Top Rated Restrautant</button>
      </div>
      <div className="res-container">
        {restrautantList.map((res) => {
          return <RestautantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
