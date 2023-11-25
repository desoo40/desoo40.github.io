import "./LegionPage.css";
import RosterPicker from "./RosterPicker/RosterPicker";
import playersJson from "../../assets/Legion/data/players.json";
import { RosterPlayerProps } from "./RosterPlayer/RosterPlayer";
import { useState } from "react";
import { Roster } from "./Roster";
import { Positions } from "./Roster";

export function getCountByPosition(position: Positions): number {
  switch (position) {
    case Positions.forwards:
      return 3;
    default:
      return 2;
  }
}

export interface StateProps {
  roster: RosterPlayerProps[];
  setRoster: React.Dispatch<React.SetStateAction<RosterPlayerProps[]>>;
  currPlayer: RosterPlayerProps;
  setCurrPlayer: React.Dispatch<React.SetStateAction<RosterPlayerProps>>;
  players: RosterPlayerProps[];
  setPlayers: React.Dispatch<React.SetStateAction<RosterPlayerProps[]>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const rosterEmpty: RosterPlayerProps[] = new Array(22).fill(null);
const playersStart: RosterPlayerProps[] = playersJson;

function LegionPage() {
  const [players, setPlayers] = useState(playersStart.slice());
  const [roster, setRoster] = useState(rosterEmpty.slice());
  const [currentPlayer, setCurrentPlayer] = useState(rosterEmpty[0]);
  const [index, setIndex] = useState(-1);

  return (
    <div className="rosterPageLayout">
      <div className="rosterLayout">
        <Roster
          roster={roster}
          setRoster={setRoster}
          currPlayer={currentPlayer}
          setCurrPlayer={setCurrentPlayer}
          players={players}
          setPlayers={setPlayers}
          index={index}
          setIndex={setIndex}
        ></Roster>
      </div>
      <RosterPicker pl={players} setCurr={setCurrentPlayer}></RosterPicker>
    </div>
  );
}

export default LegionPage;
