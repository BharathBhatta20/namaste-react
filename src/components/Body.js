import RestautantCard from "./RestautantCard";
import ResList from "../../jsonConfig";

const Body = () => {
  return (
    <div className="body">
      <div className="searchbar">Search</div>
      <div className="res-container">
        {ResList.map((res) => {
          return <RestautantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
