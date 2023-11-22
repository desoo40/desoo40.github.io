import RosterPlayer, { RosterPlayerProps } from "../RosterPlayer/RosterPlayer";
import "./RosterPicker.css";
import { DragEvent, useState } from "react";

interface RosterPickerProps {
  pl: RosterPlayerProps[];
  setCurr: React.Dispatch<React.SetStateAction<RosterPlayerProps>>;
}

function RosterPicker(props: RosterPickerProps) {
  function dragStartHandler(
    e: DragEvent<HTMLDivElement>,
    player: RosterPlayerProps
  ): void {
    console.log(player);
    props.setCurr(player);
  }
  return (
    <div className="rosterPicker">
      {props.pl.map((player, key) => {
        return (
          <div
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, player)}
            className="playerInPicker"
            key={key}
          >
            <RosterPlayer {...player}></RosterPlayer>
          </div>
        );
      })}
    </div>
  );
}

export default RosterPicker;
