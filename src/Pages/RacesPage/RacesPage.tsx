import { RaceCardProps } from "./RaceCard/RaceCard";
import { RacesYearProps } from "./RaceYear/RacesYear";
import RacesYear from "./RaceYear/RacesYear";
import RacesDataJson  from "../../data/races.json";

function SplitToYears(races: RaceCardProps[]): RacesYearProps[]
{
  let yearRaces = new Map<number, RaceCardProps[]>();

  for (let i = 0; i < races.length; i++) {
    const race = races[i];
    let date = new Date(race.date);
    let year = date.getFullYear();

    if (!yearRaces.has(year))
    {
      let newArr:RaceCardProps[] = [];
      yearRaces.set(year, newArr);
    }
    
    yearRaces.get(year)?.push(race);
  }

  var sortedMap = new Map([...yearRaces.entries()].sort().reverse());
  let ret:RacesYearProps[] = [];

  Array.from(sortedMap.entries()).map((val) => {
    let kek:RacesYearProps = {
      year: val[0],
      raceProps: val[1]
    }
    ret.push(kek)
  })

  return ret;
}

function RacesPage() {

  let yearRaces = SplitToYears(RacesDataJson);

  return <>
    <header>
      <h1 className="pageTitle">
        Official races
      </h1>
    </header>
    <div>
        {
          yearRaces.map((elem) => (
            <RacesYear {...elem}></RacesYear>
          ))
        }
    </div>
  </>
}

export default RacesPage;