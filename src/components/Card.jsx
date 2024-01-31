import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { cardActions } from "../slices/Card";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// import { useDraggable } from "@dnd-kit/core";

const Card = ({ work, des, id }) => {
  const dispatch = useDispatch();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ work });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleClick = () => {
    dispatch(cardActions.removeCard({ work, id, des }));
  };
  return (
    <div
      className="card"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
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
