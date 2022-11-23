<script>
  import { onMount } from "svelte";
  import PuzzleDifficulty from "./PuzzleDifficulty.svelte";

  $: defaultPuzzleSize = 16;
  $: puzzleSizeString = translateGridValue(defaultPuzzleSize);
  $: puzzleSizeNumber = defaultPuzzleSize;

  const generateRandomNumberArray = (gridSize) => {
    // Mav Tipi
    let nums = new Set();
    while (nums.size < gridSize) {
      nums.add(Math.floor(Math.random() * gridSize) + 1);
    }
    return nums;
  };

  const generateTiles = (mountingPoint, numArr) => {
    numArr.forEach((n, i) => {
      let puzzleTile = document.createElement("div");
      if (n === 1) {
        puzzleTile.classList.add("c-puzzle-tile");
        puzzleTile.classList.add(`tile-${i + 1}`);
        puzzleTile.classList.add("blank");
      } else {
        puzzleTile.classList.add("c-puzzle-tile");
        puzzleTile.classList.add(`tile-${i + 1}`);
        puzzleTile.innerHTML = n;
      }
      mountingPoint.appendChild(puzzleTile);
    });
  };

  const translateGridValue = (gridSizeValue) => {
    if (gridSizeValue === 9) {
      return "small";
    } else if (gridSizeValue === 16) {
      return "medium";
    } else if (gridSizeValue === 25) {
      return "large";
    } else if (gridSizeValue === 36) {
      return "huge";
    } else {
      // console.log(gridSizeValue);
      return "small";
    }
  };

  const plotGrid = (gridSize) => {
    let numberArr = [...generateRandomNumberArray(gridSize)];
    let puzzleGrid = document.getElementById("puzzle-grid");

    generateTiles(puzzleGrid, numberArr);
  };

  const retryGrid = () => {
    let puzzleGrid = document.getElementById("puzzle-grid");
    if (puzzleGrid.hasChildNodes()) {
      puzzleGrid.replaceChildren();
      plotGrid(puzzleSizeNumber);
    } else {
      plotGrid(puzzleSizeNumber);
    }
  };

  onMount(async () => {
    plotGrid(puzzleSizeNumber);

    // Use event delegation for separate buttons
    let puzzleResetButton = document.getElementById("puzzle-reset");
    puzzleResetButton.addEventListener("click", retryGrid);
  });
</script>

<div class="c-puzzle">
  <div class="c-puzzle-grid-wrapper" id="puzzle-grid-wrapper">
    <div class="c-puzzle-grid {puzzleSizeString}" id="puzzle-grid" />
  </div>
  <div class="c-puzzle-actions">
    <button id="puzzle-play">Play</button>
    <button id="puzzle-reset">Reset</button>
    <PuzzleDifficulty
      bind:value={defaultPuzzleSize}
      buildGrid={() => plotGrid(defaultPuzzleSize)}
    />
  </div>
</div>
