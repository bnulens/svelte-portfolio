<script>
  export let puzzleSize;
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
      setTimeout(() => {
        isPuzzleSolved.set(true);
      }, 2000);
    }
  };

  const switchTiles = () => {
    let newArray = [...$puzzleArray];

    // Blank tile is always the highest value of the solved puzzleArray
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
  {#if tileValue === puzzleSize}
    <span />
  {:else}
    <img
      class="o-puzzle-tile-image"
      src={`src/assets/images/puzzle/${puzzleSizeString}/${tileValue}.jpg`}
      alt="puzzle-piece"
      on:click={switchTiles}
      on:keypress={switchTiles}
    />
  {/if}
</div>
