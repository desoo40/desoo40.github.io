import "./LegionPage.css"
import RosterPicker from "./RosterPicker/RosterPicker";
import playersJson  from "../../assets/Legion/data/players_test.json";
import RosterPlayer, { RosterPlayerProps } from "./RosterPlayer/RosterPlayer";
import { useState } from "react";

const rosterEmpty:RosterPlayerProps[] = new Array(22).fill(null);

function LegionPage() {
  const [roster, setRoster] = useState(playersJson);
  return (
    <div className="rosterPageLayout">
      <div className="rosterLayout">
        <div className="rostedGrid">
          {
            roster.map((player, key) => {
              if (player === null)
              {
                return (
                  <div className="firstRow" key={key}></div>
                )
              }
              return(
                <div className="playerInRoster" key={key}>
                    <RosterPlayer {...player}></RosterPlayer>
                </div>
            )})
          }
        </div>
      </div>
      <RosterPicker pl={playersJson} ></RosterPicker>
    </div>
  )
}

export default LegionPage;