import "./RosterPlayer.css"

export type RosterPlayerProps = {
  name: string,
  number: number
}

function RosterPlayer(props: RosterPlayerProps, inPicker: boolean) {
  let pathToImage = "src/assets/Legion/playersPhoto/" + props.name + ".PNG";
  let stubImage = "src/assets/Legion/legionLogo.png";

  let bckImg = { 
    backgroundImage: `url('${pathToImage}'), url('${stubImage}')`
  }
  
  return ( <>
    <div draggable={true} className="player">
      <div className="player__flex">
        <span className="text text__number">#{props?.number}</span>
      </div>
      <div className="player__flex">
        <div className="circle" style={bckImg}></div>
        <span className="text text__name">{props?.name.split(' ')[0]}</span>
        <span className="text text__surname">{props?.name.split(' ')[1]}</span>
      </div>
      <div className="player__flex">
        <span className="text text__bage">K</span>
      </div>
    </div>
    </>
  )
}

export default RosterPlayer;