const RestautantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.resData.info?.cloudinaryImageId
        }
      />
      <h3>{props.resData.info?.name}</h3>
      <h4>{props.resData.info.cuisines.join(", ")}</h4>
      <h4>{props.resData.info.avgRatingString}</h4>
      <h4>{props.resData.info.sla.slaString}</h4>
      <h4>{props.resData.info.costForTwo}</h4>
    </div>
  );
};

export default RestautantCard;
