import "./RacesYear.css"
import RaceCard, { RaceCardProps } from "../RaceCard/RaceCard";

export type RacesYearProps = {
  year: number,
  raceProps: RaceCardProps[]
}

function RacesYear(raceYearProps: RacesYearProps) {
  return (
    <div className="races-year">
      <h2>{raceYearProps.year}</h2>
      <div className="races-grid">
        {
          raceYearProps.raceProps.map((race) => (
            <RaceCard {...race}></RaceCard>
          ))
        }
      </div>
    </div>
  )
}

export default RacesYear;