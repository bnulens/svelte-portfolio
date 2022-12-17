<script>
  import {
    puzzleArray,
    solvedArray,
    isPuzzleSolved,
  } from "../../scripts/puzzleStore";

  const solvePuzzle = () => {
    puzzleArray.set(JSON.parse($solvedArray));

    setTimeout(() => {
      isPuzzleSolved.set(true);
    }, 2000);
  };
</script>

<div>
  <button id="e-puzzle-stop" on:click={solvePuzzle}>Stop</button>
</div>
