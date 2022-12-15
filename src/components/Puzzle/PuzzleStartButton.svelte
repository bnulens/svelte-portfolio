<script>
  import {
    puzzleSize,
    isPlayingPuzzle,
    generateGridArray,
  } from "../../scripts/puzzleStore";

  $: $puzzleSize;

  const startPlayingPuzzle = (gridSize) => {
    generateGridArray(gridSize);
    isPlayingPuzzle.set(true);
  };
</script>

<div>
  <button
    id="e-puzzle-start"
    on:click={() => {
      startPlayingPuzzle($puzzleSize);
    }}>Play</button
  >
</div>
