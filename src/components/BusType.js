import React from "react";
import { IoBusOutline } from "react-icons/io5";
import { MdDirectionsBusFilled, MdOutlineBusAlert } from "react-icons/md";

function BusType({ props }) {
  function renderbustype() {
    if (props.data.Services[0].NextBus.Type === "DD") {
      return (
        <>
          <IoBusOutline style={{ fontSize: "50px", padding: "7px" }} />
          <div style={{ paddingBottom: "5px" }}>Double Deck</div>
        </>
      );
    } else if (props.data.Services[0].NextBus.Type === "SD") {
      return (
        <>
          <MdDirectionsBusFilled style={{ fontSize: "50px", padding: "7px" }} />
          <div className="bus-decks-formatting">Single Deck</div>
        </>
      );
    } else {
      return (
        <>
          <MdOutlineBusAlert style={{ fontSize: "50px", padding: "7px" }} />
          <div className="bus-decks-formatting">Bendy</div>
        </>
      );
    }
  }

  return (
    <>
      <div className="bustype cards">{renderbustype()}</div>
    </>
  );
}

export default BusType;
