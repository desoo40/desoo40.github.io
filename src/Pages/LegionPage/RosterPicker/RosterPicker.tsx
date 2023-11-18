import RosterPlayer from "../RosterPlayer/RosterPlayer";
import "./RosterPicker.css"
import rosterJson  from "../../../assets/Legion/data/players.json";

function RosterPicker() {

    return (
        <div className="rosterPicker">
            {
                rosterJson.map((player) => {
                    return(
                        <div className="playerInPicker">
                            <RosterPlayer {...player}></RosterPlayer>
                        </div>
                )})
            }
        </div>
    )
}

export default RosterPicker;