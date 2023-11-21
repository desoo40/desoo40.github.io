import RosterPlayer, { RosterPlayerProps } from "../RosterPlayer/RosterPlayer";
import "./RosterPicker.css"
import { useState } from "react";

type RosterPickerProps = {
    pl: RosterPlayerProps[]
}

function RosterPicker(props: RosterPickerProps) {
    return (   
        <div className="rosterPicker">
            {
                props.pl.map((player, key) => {
                    return(
                        <div className="playerInPicker" key={key}>
                            <RosterPlayer {...player}></RosterPlayer>
                        </div>
                )})
            }
        </div>
    )
}

export default RosterPicker;