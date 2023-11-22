import { MouseEvent, useState } from "react";
import "./RosterPlayer.css";

export interface RosterPlayerProps {
  id: number;
  name: string;
  number: number;
}

function RosterPlayer(props: RosterPlayerProps) {
  let pathToImage = "src/assets/Legion/playersPhoto/" + props.name + ".PNG";
  let stubImage = "src/assets/Legion/legionLogo.png";

  const bckgImg = `url('${pathToImage}'), url('${stubImage}')`;
  const [border, setBorder] = useState("4px solid #c1c1c1");
  const [bage, setBage] = useState("");
  return (
    <>
      <div className="player">
        <div className="player__flex">
          <span className="text text__number">#{props?.number}</span>
        </div>
        <div className="player__flex">
          <div
            className="circle"
            onClick={(e) => {
              e.preventDefault();
              setBorder("4px solid #8b1414");
            }}
            style={{ backgroundImage: bckgImg, border: border }}
          ></div>
          <span
            onClick={(e) => {
              e.preventDefault();
              setBage("K");
            }}
            className="text text__name"
          >
            {props?.name.split(" ")[0]}
          </span>
          <span className="text text__surname">
            {props?.name.split(" ")[1]}
          </span>
        </div>
        <div className="player__flex">
          <span className="text text__bage">{bage}</span>
        </div>
      </div>
    </>
  );
}

export default RosterPlayer;
