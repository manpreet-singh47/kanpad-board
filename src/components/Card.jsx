import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { cardActions } from "../slices/Card";

const Card = ({ work, des, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cardActions.removeCard({ work, id, des }));
  };
  return (
    <div className="card">
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "5px",
        }}
        className=" btn h-6 btn-danger"
        onClick={handleClick}
      >
        <RxCross2 />
      </button>
      <div className="card-body">
        <h5 className="card-title">{work}</h5>
        <p className="card-text">{des}</p>
      </div>
    </div>
  );
};

export default Card;
