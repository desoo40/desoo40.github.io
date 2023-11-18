import "./LegionPage.css"
import RosterPicker from "./RosterPicker/RosterPicker";

function LegionPage() {
  return (
    <div className="rosterPageLayout">
      <div className="rosterLayout">
            <div className="firstRow"></div>
      </div>
      <RosterPicker></RosterPicker>
    </div>
  )
}

export default LegionPage;