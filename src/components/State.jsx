import React, { useReducer } from "react";

const State = () => {
  const initailState = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return state + 1;

      case "DEC":
        return state - 1;
      case "SQUARE":
        return state * state;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initailState);
  //   const increase = () => {
  //     console.log("Increase");
  //     dispatch({
  //       type: "INC",
  //     });
  //     console.log(state);
  //   };

  return (
    <>
      <h1 className="count">count : {state} </h1>
      <div className="btn-box">
        <button
          className="btn btn-increse"
          onClick={() => dispatch({ type: "INC" })}
        >
          Increse
        </button>
        <button
          className="btn btn-decrese"
          onClick={() => dispatch({ type: "DEC" })}
        >
          Decrease
        </button>
        <button
          className="btn btn-square"
          onClick={() => dispatch({ type: "SQUARE" })}
        >
          Square
        </button>
      </div>
    </>
  );
};

export default State;
