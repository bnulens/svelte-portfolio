import { writable } from "svelte/store";

export const puzzleSize = writable(9);
export const puzzleArray = writable([]);
export const isPlayingPuzzle = writable(false);

export const generateGridArray = (gridSize) => {
  puzzleArray.update((n) => {
    let nums = new Set();
    while (nums.size < gridSize) {
      nums.add(Math.floor(Math.random() * gridSize));
    }
    n = Array.from(nums);
    return n;
  });
};
