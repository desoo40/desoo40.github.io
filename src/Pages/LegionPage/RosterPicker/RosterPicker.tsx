import RosterPlayer, { RosterPlayerProps } from "../RosterPlayer/RosterPlayer";
import "./RosterPicker.css";

interface RosterPickerProps {
  pl: RosterPlayerProps[];
  setCurr: React.Dispatch<React.SetStateAction<RosterPlayerProps>>;
}

function RosterPicker(props: RosterPickerProps) {
  function dragStartHandler(player: RosterPlayerProps): void {
    props.setCurr(player);
  }
  return (
    <div className="rosterPicker">
      {props.pl.map((player, key) => {
        return (
          <div
            draggable={true}
            onDragStart={(_) => dragStartHandler(player)}
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
