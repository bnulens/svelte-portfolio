<script>
  import { onMount } from "svelte";
  import {
    isPlayingPuzzle,
    puzzleSize,
    puzzleArray,
  } from "../../scripts/puzzleStore";
  import PuzzleStartButton from "./PuzzleStartButton.svelte";
  import PuzzleResetButton from "./PuzzleResetButton.svelte";
  import PuzzleDifficulty from "./PuzzleDifficulty.svelte";
  import PuzzleStopButton from "./PuzzleStopButton.svelte";
  import PuzzleTile from "./PuzzleTile.svelte";

  $: $puzzleSize;
  $: $puzzleArray;
  $: puzzleSizeString = translateGridValue($puzzleSize);
  $: $isPlayingPuzzle;

  const translateGridValue = (gridSizeValue) => {
    if (gridSizeValue === 9) {
      return "small";
    } else if (gridSizeValue === 16) {
      return "medium";
    } else if (gridSizeValue === 25) {
      return "large";
    } else {
      return "small";
    }
  };

  const buildMatrix = (n) => {
    const allTiles = [];
    let matrixTiles = [];
    // prep structure for matrixTiles
    for (let i = 0; i < n; i++) {
      matrixTiles.push([]);
      for (let j = 0; j < n; j++) {
        const tileNumber = i * n + j;
        allTiles.push(tileNumber);
        matrixTiles[i].push(tileNumber);
      }
    }
    return {
      matrixTiles,
      allTiles,
    };
  };

  const getTileMetaData = (matrixTiles, allTiles) => {
    const topRowTiles = matrixTiles[0];
    const bottomRowTiles = matrixTiles[matrixTiles.length - 1];
    const leftRowTiles = matrixTiles.map((x) => x[0]);
    const rightRowTiles = matrixTiles.map((x) => x[x.length - 1]);
    const edgeTiles = new Set([
      ...topRowTiles,
      ...bottomRowTiles,
      ...leftRowTiles,
      ...rightRowTiles,
    ]);
    const edgeTilesArray = Array.from(edgeTiles);
    const centerTiles = allTiles.filter((tileNumber) => {
      // if tileNumber is not an edgeTile, then it is a center tile
      if (edgeTilesArray.indexOf(tileNumber) === -1) return true;
      return false;
    });

    return {
      centerTiles,
      topRowTiles,
      bottomRowTiles,
      leftRowTiles,
      rightRowTiles,
    };
  };

  const initStructureAndGetTileData = () => {
    const { matrixTiles, allTiles } = buildMatrix(puzzleSizeValue);
    const {
      centerTiles,
      topRowTiles,
      bottomRowTiles,
      leftRowTiles,
      rightRowTiles,
    } = getTileMetaData(matrixTiles, allTiles);

    console.log("centerTiles", centerTiles);
    console.log("topRowTiles", topRowTiles);
    console.log("bottomRowTiles", bottomRowTiles);
    console.log("leftRowTiles", leftRowTiles);
    console.log("rightRowTiles", rightRowTiles);
  };

  onMount(async () => {
    // initStructureAndGetTileData();
    // Use event delegation for separate buttons
    // let puzzleResetButton = document.getElementById("e-puzzle-reset");
    // console.log(puzzleResetButton);
    // puzzleResetButton.addEventListener("click", retryGrid);
  });
</script>

<div class="c-puzzle">
  <div class="c-puzzle-grid-wrapper">
    <div class="c-puzzle-grid {puzzleSizeString}" id="puzzle-grid">
      {#if !$isPlayingPuzzle}
        <img class="c-puzzle-grid-image" src="" alt="placeholder" />
      {:else}
        {#each $puzzleArray as tile}
          <PuzzleTile
            tileValue={tile}
            {puzzleSizeString}
            puzzleSizeValue={$puzzleSize}
          />
        {/each}
      {/if}
    </div>
  </div>
  <div class="c-puzzle-actions">
    {#if !$isPlayingPuzzle}
      <PuzzleStartButton />
    {:else}
      <PuzzleResetButton />
      <PuzzleDifficulty />
      <PuzzleStopButton />
    {/if}
  </div>
</div>
