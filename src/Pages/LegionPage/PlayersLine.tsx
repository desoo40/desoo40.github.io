import { StateProps } from "./LegionPage";
import { PlayersChain } from "./PlayersChain";
import { Positions } from "./Roster";

export function PlayersLine(props: { states: StateProps; index: number }) {
  return (
    <>
      <div className="playersLine">
        <PlayersChain
          position={Positions.forwards}
          states={props.states}
          index={2 + 5 * props.index}
        />
        <PlayersChain
          position={Positions.defenders}
          states={props.states}
          index={5 + 5 * props.index}
        />
      </div>
    </>
  );
}
