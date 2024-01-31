import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { cardHolderActions } from "../slices/CardHolder";
import Card from "./card";

const WorkBoard = ({ keyy, showform }) => {
  const card = useSelector((store) => store.card);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(cardHolderActions.removeCardHolder(keyy));
  };

  return (
    <>
      <div
        className="Longcard"
        style={{
          width: "18rem",
          borderRadius: "6px",
          position: "relative",
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5px",
          }}
          className=" btn h-6 btn-success"
          onClick={handleClick}
        >
          <RxCross2 />
        </button>

        {card.map((item) =>
          keyy === item.key ? (
            <Card work={item.work} des={item.des} id={keyy} key={keyy} />
          ) : null
        )}

        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5px",
            width: "96%",
            height: "90px",
            border: "1px dashed gray",
            position: "absolute",
            bottom: "5px",
          }}
          className=" btn h-6 btn-"
          onClick={() => showform(keyy)}
        >
          + <br />
          Add New Card
        </button>
      </div>
    </>
  );
};

export default WorkBoard;
