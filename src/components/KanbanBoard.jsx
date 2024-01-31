import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WorkBoard from "./WorkBoard";
import { cardHolderActions } from "../slices/CardHolder";
import { cardActions } from "../slices/Card";
import { RxCross2 } from "react-icons/rx";

const KanbanBoard = () => {
  const [showForm, setshowForm] = useState(false);
  const [key, setkey] = useState("");

  const work = useRef("");
  const des = useRef("");

  const cardHolder = useSelector((store) => store.cardHolder);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cardHolderActions.addCardHolder());
  };

  const handleAddCard = (keyy) => {
    setshowForm(!showForm);
    setkey(keyy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setshowForm(!showForm);
    dispatch(
      cardActions.addCard({
        work: work.current.value,
        des: des.current.value,
        key: key,
      })
    );
  };
  return (
    <>
      <button
        style={{
          position: "absolute",
          height: "50px",
          width: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: "20px",
          top: "5%",
          zIndex: "2",
        }}
        // id="addCard"
        className=" btn btn-danger
         addCard"
        onClick={handleClick}
      >
        Add card holder
      </button>
      <div style={{ position: "relative" }} id="KanbanBoard">
        {cardHolder.map((cardHolder) => (
          <WorkBoard
            key={cardHolder.id}
            keyy={cardHolder.id}
            showform={handleAddCard}
          />
        ))}

        {showForm && (
          <form
            method="submit"
            onSubmit={handleSubmit}
            style={{
              position: "absolute",
              backgroundColor: "white",
              width: "280px",
              textAlign: "center",
              padding: "30px",
              boxShadow: "2px 2px 10px grey",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {/* <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "-25px",
                borderRadius: "10px",
                marginTop: "-25px",
              }}
              className=" btn h-6 btn-danger"
              onClick={handleAddCard}
            >
              <RxCross2 />
            </button> */}
            <label htmlFor="work">Enter Work</label>
            <input type="text" id="work" ref={work} />
            <label htmlFor="des">Enter description</label>
            <input type="text" id="des" ref={des} />
            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "5px",
              }}
              className=" btn h-6 btn-success"
            >
              Add
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default KanbanBoard;
