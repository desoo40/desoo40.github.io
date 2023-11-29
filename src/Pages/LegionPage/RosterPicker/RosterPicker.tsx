import RosterPlayer, { RosterPlayerProps } from "../RosterPlayer/RosterPlayer";
import "./RosterPicker.css";

interface RosterPickerProps {
  pl: RosterPlayerProps[];
  setCurr: React.Dispatch<React.SetStateAction<RosterPlayerProps>>;
}

function RosterPicker(props: RosterPickerProps) {
  return (
    <div className="rosterPicker">
      {props.pl.map((player, key) => {
        return (
          <div
            draggable={true}
            onDragStart={() => props.setCurr(player)}
            className="playerInPicker"
            key={player.id}
          >
            <RosterPlayer {...player}></RosterPlayer>
          </div>
        );
      })}
    </div>
  );
}

export default RosterPicker;
