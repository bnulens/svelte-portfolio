<script>
  export let puzzleSizeString;
  export let tileValue;
  export let index;

  import {
    puzzleArray,
    solvedArray,
    isPuzzleSolved,
  } from "../../scripts/puzzleStore";

  const checkIfCorrect = () => {
    if (JSON.stringify($puzzleArray) === $solvedArray) {
      isPuzzleSolved.set(true);
    }
  };

  const switchTiles = () => {
    let newArray = [...$puzzleArray];

    // Blank tile is always the last entry of the solved puzzleArray
    // Potential values 9 - 16 - 25
    const blankTileIndex = newArray.indexOf(newArray.length);
    // Swap out values:
    // - Position (index) of last number
    // - Clicked target value
    newArray[blankTileIndex] = newArray[index];
    newArray[index] = newArray.length;

    puzzleArray.set(newArray);

    checkIfCorrect();
  };
</script>

<div class="c-puzzle-tile">
  {#if tileValue === 0}
    <span />
  {:else}
    <img
      class="o-puzzle-tile-image"
      src={`src/assets/images/puzzle/${puzzleSizeString}/${tileValue}.jpg`}
      alt="puzzle-piece"
      on:click={switchTiles}
      on:keydown={switchTiles}
    />
  {/if}
</div>
