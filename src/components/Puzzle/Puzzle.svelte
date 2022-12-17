<script>
  import {
    isPlayingPuzzle,
    puzzleSize,
    puzzleArray,
    isPuzzleSolved,
  } from "../../scripts/puzzleStore";
  import Summary from "../Summary.svelte";
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
</script>

{#if !$isPuzzleSolved}
  <div class="c-puzzle">
    <div class="c-puzzle-grid-wrapper">
      <div class="c-puzzle-grid {puzzleSizeString}" id="puzzle-grid">
        {#if !$isPlayingPuzzle}
          <div class="c-puzzle-grid-image">
            <!-- <img class="c-puzzle-grid-image img" src="" alt="placeholder" /> -->
            <div class="c-puzzle-grid-image img" />
          </div>
        {:else}
          {#each $puzzleArray as tile, index}
            <PuzzleTile
              tileValue={tile}
              puzzleSizeValue={$puzzleSize}
              {puzzleSizeString}
              {index}
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
{:else}
  <Summary />
{/if}
