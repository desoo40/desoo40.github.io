import { useState } from "react";
import "./RosterPlayer.css";

export interface RosterPlayerProps {
  id: number;
  name: string;
  number: number;
  photoUrl: string;
}

enum PlayerStatus {
  Ordinar,
  StartGoalie,
  Assist,
  Cap,
}
const playerStatuses = [
  PlayerStatus.Ordinar,
  PlayerStatus.StartGoalie,
  PlayerStatus.Assist,
  PlayerStatus.Cap,
];

function RosterPlayer(props: RosterPlayerProps) {
  let pathToImage = props.photoUrl;
  const stubImage =
    "https://sun1-21.userapi.com/c845020/v845020139/c9805/trYCzz9BlRU.jpg?ava=1";
  const bckgImg = `url('${pathToImage}'), url('${stubImage}')`;

  const redBorder: string = "4px solid #8b1414";
  const grayBorder: string = "4px solid #c1c1c1";
  const [status, setStatus] = useState(0);

  const currentStatus = playerStatuses[status];
  const border = currentStatus == PlayerStatus.Ordinar ? grayBorder : redBorder;

  let bage = "";
  if (currentStatus === PlayerStatus.Assist) bage = "A";
  if (currentStatus === PlayerStatus.Cap) bage = "K";

  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          setStatus((status) => (status + 1) % 4);
        }}
        className="player"
      >
        <span className="text text__number">#{props?.number}</span>
        <div className="payer__flex">
          <div
            className="circle"
            style={{ backgroundImage: bckgImg, border: border }}
          ></div>
          <span className="text text__name">{props?.name.split(" ")[0]}</span>
          <span className="text text__surname">
            {props?.name.split(" ")[1]}
          </span>
        </div>
        <div className="text text__bage">{bage}</div>
      </div>
    </>
  );
}

export default RosterPlayer;
