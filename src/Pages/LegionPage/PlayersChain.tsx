import { StateProps, getCountByPosition } from "./LegionPage";
import { RosterElement } from "./RosterElement";
import { Positions } from "./Roster";

export function PlayersChain(props: {
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
          <RosterElement states={props.states} index={props.index + i} />
        ))}
      </div>
    </>
  );
}
