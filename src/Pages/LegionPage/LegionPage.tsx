import "./LegionPage.css";
import RosterPicker from "./RosterPicker/RosterPicker";
import playersJson from "../../assets/Legion/data/players.json";
import RosterPlayer, { RosterPlayerProps } from "./RosterPlayer/RosterPlayer";
import { DragEvent, useState } from "react";

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

function dropHandler(
  e: DragEvent<HTMLDivElement>,
  states: StateProps,
  index: number
): void {
  e.preventDefault();

  const newRoster = states.roster.slice();

  //avoid doubling
  if (states.index !== -1) {
    //@ts-ignore
    newRoster[states.index] = null;
    states.setIndex(-1);
  }

  let newPlayers = states.players.slice();

  if (newRoster[index] !== null) newPlayers.push(newRoster[index]);

  newRoster[index] = states.currPlayer;
  states.setRoster(newRoster);

  newPlayers = newPlayers.filter((el) => el.id !== states.currPlayer.id);
  states.setPlayers(newPlayers);
}

function doubleHandler(states: StateProps, index: number): void {
  const newRoster = states.roster.slice();
  const newPlayers = states.players.slice();

  newPlayers.push(newRoster[index]);
  if (newRoster[index] === null) return;
  //@ts-ignore
  newRoster[index] = null;

  states.setRoster(newRoster);
  states.setPlayers(newPlayers);
}
function dragStartHandler(states: StateProps, index: number): void {
  states.setIndex(index);
  states.setCurrPlayer(states.roster[index]);
}

function RosterElement(props: { states: StateProps; index: number }) {
  const defShadow = "player";
  const [shadow, setShadow] = useState(defShadow);
  const player = props.states.roster[props.index];
  const isNull = player === null;
  return (
    <div
      className="rosterElement"
      draggable={!isNull}
      onDragOver={(e) => {
        e.preventDefault();
        setShadow(defShadow + " player__ondragover");
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setShadow(defShadow);
      }}
      onDrop={(e) => dropHandler(e, props.states, props.index)}
      onDoubleClick={(_) => {
        doubleHandler(props.states, props.index);
        setShadow(defShadow);
      }}
      onDragStart={(_) => dragStartHandler(props.states, props.index)}
    >
      {player === null ? (
        <div className={shadow}></div>
      ) : (
        <RosterPlayer {...player}></RosterPlayer>
      )}
    </div>
  );
}

function PlayersChain(props: {
  position: Positions;
  states: StateProps;
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
            states={props.states}
            index={props.index + i}
          ></RosterElement>
        ))}
      </div>
    </>
  );
}

function PlayersLine(props: { states: StateProps; index: number }) {
  return (
    <>
      <div className="playersLine">
        <PlayersChain
          position={Positions.forwards}
          states={props.states}
          index={2 + 5 * props.index}
        ></PlayersChain>
        <PlayersChain
          position={Positions.defenders}
          states={props.states}
          index={5 + 5 * props.index}
        ></PlayersChain>
      </div>
    </>
  );
}

interface StateProps {
  roster: RosterPlayerProps[];
  setRoster: React.Dispatch<React.SetStateAction<RosterPlayerProps[]>>;
  currPlayer: RosterPlayerProps;
  setCurrPlayer: React.Dispatch<React.SetStateAction<RosterPlayerProps>>;
  players: RosterPlayerProps[];
  setPlayers: React.Dispatch<React.SetStateAction<RosterPlayerProps[]>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Roster(props: StateProps) {
  return (
    <>
      <PlayersChain
        position={Positions.goalies}
        states={props}
        index={0}
      ></PlayersChain>

      <div className="players">
        {Array.from(Array(4)).map((_, i) => (
          <PlayersLine states={props} index={i}></PlayersLine>
        ))}
      </div>
    </>
  );
}

function LegionPage() {
  const rosterEmpty: RosterPlayerProps[] = new Array(22).fill(null);
  const playersStart: RosterPlayerProps[] = playersJson;

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
