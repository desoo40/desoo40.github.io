import './RaceCard.css' 

export type RaceCardProps = {
  name: string,
  distance: number,
  time: string,
  date: string,
  url?: string
}

function RaceCard(raceProps: RaceCardProps) {
  return (
    <div className="raceCard">
      <div className="race-card-image"></div>
      <div className="race-card-info">
        <h2>{raceProps.name}</h2>
        <div className="raceDate">{raceProps.date}</div>
        <div className="raceDistance">{raceProps.distance} km</div>
        <div className="raceTime">{raceProps.time}</div>
        <div className="racePace">{raceProps.distance}</div>
        </div> 
    </div>
  )
}

export default RaceCard;