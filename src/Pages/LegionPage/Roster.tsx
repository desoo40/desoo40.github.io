import { StateProps } from "./LegionPage";
import { PlayersChain } from "./PlayersChain";
import { PlayersLine } from "./PlayersLine";

export enum Positions {
  goalies,
  forwards,
  defenders,
}

export function Roster(props: StateProps) {
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
