import RosterPlayer from "./RosterPlayer/RosterPlayer";
import { useState } from "react";
import { StateProps } from "./LegionPage";
import {
  doubleHandler,
  dropHandler,
  dragStartHandler,
} from "./rosterElementHandlers";

export function RosterElement(props: { states: StateProps; index: number }) {
  const defShadow = "player";
  const player = props.states.roster[props.index];
  const isNull = player === null;

  const [shake, setShake] = useState(false);
  const [shadow, setShadow] = useState(defShadow);

  const animate = () => {
    setShake(true);
    setTimeout(() => setShake(false), 200);
  };

  return (
    <div
      className={shake ? "shake" : ""}
      draggable={!isNull}
      onDragOver={(e) => {
        e.preventDefault();
        setShadow(defShadow + " player__ondragover");
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setShadow(defShadow);
      }}
      onClick={animate}
      onContextMenu={(e) => {
        e.preventDefault();
        doubleHandler(props.states, props.index);
        setShadow(defShadow);
      }}
      onDrop={(e) => dropHandler(e, props.states, props.index)}
      onDragStart={() => dragStartHandler(props.states, props.index)}
    >
      {player === null ? (
        <div className={shadow}></div>
      ) : (
        <RosterPlayer {...player}></RosterPlayer>
      )}
    </div>
  );
}
