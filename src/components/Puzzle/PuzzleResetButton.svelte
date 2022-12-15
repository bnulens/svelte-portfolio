<script>
  import {
    puzzleSize,
    puzzleArray,
    generateGridArray,
  } from "../../scripts/puzzleStore";

  $: $puzzleSize;

  const redrawGrid = () => {
    let puzzleGrid = document.getElementById("puzzle-grid");
    if (puzzleGrid.hasChildNodes()) {
      puzzleArray.set([]);
      generateGridArray($puzzleSize);
    } else {
      generateGridArray($puzzleSize);
    }
  };
</script>

<div>
  <button id="e-puzzle-reset" on:click={redrawGrid}>Reset</button>
</div>
