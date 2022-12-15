<script>
  import {
    puzzleSize,
    puzzleArray,
    isPlayingPuzzle,
  } from "../../scripts/puzzleStore";

  const stopPlayingPuzzle = () => {
    puzzleSize.set(9);
    puzzleArray.set([]);
    isPlayingPuzzle.set(false);
  };
</script>

<div>
  <button id="e-puzzle-stop" on:click={stopPlayingPuzzle}>Stop</button>
</div>
