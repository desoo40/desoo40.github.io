import { DragEvent } from "react";
import { StateProps } from "./LegionPage";

export function dropHandler(
  e: DragEvent<HTMLDivElement>,
  states: StateProps,
  index: number
): void {
  e.preventDefault();

  const newRoster = states.roster.slice();

  //avoid doubling
  if (states.index !== -1) {
    //@ts-ignore
    newRoster[states.index] = null;
    states.setIndex(-1);
  }

  let newPlayers = states.players.slice();

  if (newRoster[index] !== null) newPlayers.push(newRoster[index]);

  newRoster[index] = states.currPlayer;
  states.setRoster(newRoster);

  newPlayers = newPlayers.filter((el) => el.id !== states.currPlayer.id);
  states.setPlayers(newPlayers);
}

export function doubleHandler(states: StateProps, index: number): void {
  const newRoster = states.roster.slice();
  const newPlayers = states.players.slice();

  newPlayers.push(newRoster[index]);
  if (newRoster[index] === null) return;
  //@ts-ignore
  newRoster[index] = null;

  states.setRoster(newRoster);
  states.setPlayers(newPlayers);
}

export function dragStartHandler(states: StateProps, index: number): void {
  states.setIndex(index);
  states.setCurrPlayer(states.roster[index]);
}
