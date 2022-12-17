import { writable } from "svelte/store";

export const solvedArray = writable(null);
export const puzzleSize = writable(9);
export const puzzleArray = writable([]);
export const isPlayingPuzzle = writable(false);
export const isPuzzleSolved = writable(false);

export const generateGridArray = (gridSize) => {
  const _solvedArray = [...Array(gridSize).keys()];
  solvedArray.set(JSON.stringify(_solvedArray));
  const shuffledArray = _solvedArray.sort(() => Math.random() - 0.5);
  puzzleArray.set(shuffledArray);
};
