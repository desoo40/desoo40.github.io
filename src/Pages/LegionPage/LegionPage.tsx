import "./LegionPage.css";
import RosterPicker from "./RosterPicker/RosterPicker";
import playersJson from "../../assets/Legion/data/players.json";
import RosterPlayer, { RosterPlayerProps } from "./RosterPlayer/RosterPlayer";
import { DragEvent, MouseEvent, useState } from "react";

enum Positions {
  goalies,
  forwards,
  defenders,
}

function getCountByPosition(position: Positions): number {
  switch (position) {
    case Positions.forwards:
      return 3;
    default:
      return 2;
  }
}

function RosterElement(props: { fancy: FancyProps; index: number }) {
  function dropHandler(e: DragEvent<HTMLDivElement>, fancy: FancyProps): void {
    e.preventDefault();
    let newRoster = props.fancy.roster.slice();
    newRoster[props.index] = props.fancy.currPlayer;
    props.fancy.setRoster(newRoster);
    console.log(fancy);
  }

  function doubleHandler(fancy: FancyProps): void {
    let newRoster = props.fancy.roster.slice();
    newRoster[props.index] = null;
    props.fancy.setRoster(newRoster);
    console.log(fancy);
  }

  function dragOverHandler(e: DragEvent<HTMLDivElement>): void {
    e.preventDefault();
  }
  const player = props.fancy.roster[props.index];

  return (
    <div
      className="rosterElement"
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, props.fancy)}
      onDoubleClick={(_) => doubleHandler(props.fancy)}
    >
      {player == null ? (
        <div className="player player__stub"></div>
      ) : (
        <RosterPlayer name={player.name} number={player.number}></RosterPlayer>
      )}
    </div>
  );
}

function PlayersChain(props: {
  position: Positions;
  fancy: FancyProps;
  index: number;
}) {
  const count: number = getCountByPosition(props.position);
  const posStr: string = Positions[props.position];

  const className = `playersChain ${posStr}`;

  return (
    <>
      <div className={className}>
        {Array.from(Array(count)).map((_, i) => (
          <RosterElement
            fancy={props.fancy}
            index={props.index + i}
          ></RosterElement>
        ))}
      </div>
    </>
  );
}

function PlayersLine(props: { fancy: FancyProps; index: number }) {
  return (
    <>
      <div className="playersLine">
        <PlayersChain
          position={Positions.forwards}
          fancy={props.fancy}
          index={2 + 5 * props.index}
        ></PlayersChain>
        <PlayersChain
          position={Positions.defenders}
          fancy={props.fancy}
          index={5 + 5 * props.index}
        ></PlayersChain>
      </div>
    </>
  );
}

interface FancyProps {
  roster: RosterPlayerProps[];
  setRoster: React.Dispatch<React.SetStateAction<RosterPlayerProps[]>>;
  currPlayer: RosterPlayerProps;
  setCurrPlayer: React.Dispatch<React.SetStateAction<RosterPlayerProps>>;
  players: RosterPlayerProps[];
  setPlayers: React.Dispatch<React.SetStateAction<RosterPlayerProps>>;
}

function Roster(props: FancyProps) {
  return (
    <>
      <PlayersChain
        position={Positions.goalies}
        fancy={props}
        index={0}
      ></PlayersChain>
      <PlayersLine fancy={props} index={0}></PlayersLine>
      <PlayersLine fancy={props} index={1}></PlayersLine>
      <PlayersLine fancy={props} index={2}></PlayersLine>
      <PlayersLine fancy={props} index={3}></PlayersLine>
    </>
  );
}

function LegionPage() {
  const rosterEmpty: RosterPlayerProps[] = new Array(22).fill(null);
  const playersStart: RosterPlayerProps[] = playersJson;

  const [players, setPlayers] = useState(playersStart.slice());
  const [roster, setRoster] = useState(rosterEmpty.slice());
  const [currentPlayer, setCurrentPlayer] = useState(rosterEmpty[0]);

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
        ></Roster>
      </div>
      <RosterPicker pl={players} setCurr={setCurrentPlayer}></RosterPicker>
    </div>
  );
}

export default LegionPage;
