<script>
  import { onMount } from "svelte";
  import PuzzleDifficulty from "./PuzzleDifficulty.svelte";

  $: defaultPuzzleSize = 9;
  $: puzzleSizeString = translateGridValue(defaultPuzzleSize);
  $: puzzleSizeNumber = defaultPuzzleSize;

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

  const defineBlankTile = () => {
    let blankTile = [...document.querySelectorAll(".blank")][0];
    let blankTileValue = parseInt(blankTile.classList[1].slice(5));

    return blankTileValue;
  };

  const findBorderingTilesSmall = (n) => {
    let borderingTiles = [];
    let blankTileValue = defineBlankTile();

    const defineCandidateTiles = (prevTilesArr, nextTilesArr) => {
      prevTilesArr.length = 0;
      borderingTiles = [...nextTilesArr];
      return borderingTiles;
    };

    // One side blocked
    if (blankTileValue === 2) {
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );

      // console.log(rightTile, bottomTile, leftTile);
      let candidateTiles = [...rightTile, ...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 4) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      // console.log(topTile, rightTile, bottomTile);
      let candidateTiles = [...topTile, ...rightTile, ...bottomTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 6) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      // console.log(topTile, bottomTile, leftTile);
      let candidateTiles = [...topTile, ...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 8) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      // console.log(topTile, rightTile, leftTile);
      let candidateTiles = [...topTile, ...rightTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    // Two sides blocked
    if (blankTileValue === 1) {
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      // console.log(rightTile, bottomTile);
      let candidateTiles = [...rightTile, ...bottomTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 3) {
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      // console.log(bottomTile, leftTile);
      let candidateTiles = [...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 7) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      // console.log(topTile, rightTile);
      let candidateTiles = [...topTile, ...rightTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 9) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      // console.log(topTile, leftTile);
      let candidateTiles = [...topTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    } else {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      // console.log(topTile, rightTile, bottomTile, leftTile);
      return [...topTile, ...rightTile, ...bottomTile, ...leftTile];
    }
  };
  const findBorderingTilesMedium = (n) => {
    let borderingTiles = [];
    let blankTileValue = defineBlankTile();

    const defineCandidateTiles = (prevTilesArr, nextTilesArr) => {
      prevTilesArr.length == 0;
      borderingTiles = [...nextTilesArr];
      return borderingTiles;
    };

    // One side blocked
    if (blankTileValue === 2 || 3) {
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...rightTile, ...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 8 || 12) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...topTile, ...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 14 || 15) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...topTile, ...rightTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 5 || 9) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let candidateTiles = [...topTile, ...rightTile, ...bottomTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    // Two-sides blocked
    if (blankTileValue === 1) {
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let candidateTiles = [...rightTile, ...bottomTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 4) {
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 13) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let candidateTiles = [...topTile, ...rightTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 16) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...topTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    } else {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [
        ...topTile,
        ...rightTile,
        ...bottomTile,
        ...leftTile,
      ];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
  };
  const findBorderingTilesLarge = (n) => {
    let blankTileElement = [...document.getElementsByClassName("blank")][0];
    let blankTileValue = parseInt(blankTileElement.classList[1].slice(5));

    const defineCandidateTiles = (prevTilesArr, nextTilesArr) => {
      prevTilesArr.length == 0;
      borderingTiles = [...nextTilesArr];
      return borderingTiles;
    };

    // One side blocked
    if (blankTileValue === 2 || 3 || 4) {
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...rightTile, ...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 10 || 15 || 24) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...topTile, ...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 22 || 23 || 24) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...topTile, ...rightTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 6 || 11 || 19) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let candidateTiles = [...topTile, ...rightTile, ...bottomTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    // Two sides blocked
    if (blankTileValue === 1) {
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let candidateTiles = [...rightTile, ...bottomTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 5) {
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 21) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let candidateTiles = [...topTile, ...rightTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 25) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...topTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    } else {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [
        ...topTile,
        ...rightTile,
        ...bottomTile,
        ...leftTile,
      ];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
  };
  const findBorderingTilesHuge = (n) => {
    let blankTileElement = [...document.getElementsByClassName("blank")][0];
    let blankTileValue = parseInt(blankTileElement.classList[1].slice(5));

    const defineCandidateTiles = (prevTilesArr, nextTilesArr) => {
      prevTilesArr.length == 0;
      borderingTiles = [...nextTilesArr];
      return borderingTiles;
    };

    // One side blocked
    if (blankTileValue === 2 || 3 || 4 || 5) {
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...rightTile, ...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 12 || 18 || 24 || 30) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...topTile, ...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 32 || 33 || 34 || 35) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...topTile, ...rightTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 7 || 13 || 19 || 25) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let candidateTiles = [...topTile, ...rightTile, ...bottomTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    // Two sides blocked
    if (blankTileValue === 1) {
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let candidateTiles = [...rightTile, ...bottomTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 6) {
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...bottomTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 31) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let candidateTiles = [...topTile, ...rightTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
    if (blankTileValue === 36) {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [...topTile, ...leftTile];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    } else {
      let topTile = document.getElementsByClassName(
        `tile-${blankTileValue - n}`
      );
      let rightTile = document.getElementsByClassName(
        `tile-${blankTileValue + 1}`
      );
      let bottomTile = document.getElementsByClassName(
        `tile-${blankTileValue + n}`
      );
      let leftTile = document.getElementsByClassName(
        `tile-${blankTileValue - 1}`
      );
      let candidateTiles = [
        ...topTile,
        ...rightTile,
        ...bottomTile,
        ...leftTile,
      ];
      return defineCandidateTiles(borderingTiles, candidateTiles);
    }
  };

  const plotGrid = (gridSize) => {
    let numberArr = [...generateRandomNumberArray(gridSize)];
    let puzzleGrid = document.getElementById("puzzle-grid");

    generateTiles(puzzleGrid, numberArr);
    defineAllowedGridTiles(gridSize);
  };

  const defineAllowedGridTiles = (gridSize) => {
    gridSize === 9
      ? defineMove(findBorderingTilesSmall(3), gridSize)
      : gridSize === 16
      ? defineMove(findBorderingTilesMedium(4), gridSize)
      : gridSize === 25
      ? defineMove(findBorderingTilesLarge(5), gridSize)
      : gridSize === 36
      ? defineMove(findBorderingTilesHuge(6), gridSize)
      : console.error("No tiles available");
  };

  const defineMove = (targets, gridSize) => {
    let blankTile = [...document.querySelectorAll(".blank")][0];
    let allGridTiles = [...document.getElementById("puzzle-grid").childNodes];

    let blankGridTileIndex = allGridTiles.indexOf(blankTile);
    allGridTiles.splice(blankGridTileIndex, 1);

    let [lockedTiles, targetTiles] = [[], targets];

    lockedTiles = allGridTiles.filter((el) => !targetTiles.includes(el));

    targetTiles.forEach((t) => {
      let targetTileInnerValue = parseInt(t.innerHTML);

      t.addEventListener(
        "click",
        (e) => {
          let targetTile = e.target;

          blankTile.classList.remove("blank");
          blankTile.innerHTML = targetTileInnerValue;

          targetTile.classList.add("blank");
          targetTile.innerHTML = null;

          return defineAllowedGridTiles(gridSize);
        },
        { once: true }
      );
    });
    lockedTiles.forEach((el) => {
      return el.replaceWith(el.cloneNode(true));
    });
  };

  const retryGrid = () => {
    let puzzleGrid = document.getElementById("puzzle-grid");
    if (puzzleGrid.hasChildNodes()) {
      puzzleGrid.replaceChildren();
      plotGrid(puzzleSizeNumber);
      defineBlankTile();
    } else {
      plotGrid(puzzleSizeNumber);
      defineBlankTile();
    }
  };

  const playPuzzle = (gridSize) => {
    defineAllowedGridTiles(gridSize);
  };

  //

  onMount(async () => {
    plotGrid(puzzleSizeNumber);
    playPuzzle(puzzleSizeNumber);

    // Use event delegation for separate buttons
    let puzzleResetButton = document.getElementById("e-puzzle-reset");
    console.log(puzzleResetButton);
    puzzleResetButton.addEventListener("click", retryGrid);
  });
</script>

<div class="c-puzzle">
  <div class="c-puzzle-grid-wrapper">
    <div class="c-puzzle-grid {puzzleSizeString}" id="puzzle-grid" />
  </div>
  <div class="c-puzzle-actions">
    <button id="e-puzzle-play">Play</button>
    <button id="e-puzzle-reset">Reset</button>
    <PuzzleDifficulty
      bind:value={defaultPuzzleSize}
      buildGrid={() => plotGrid(defaultPuzzleSize)}
    />
    <button id="e-puzzle-stop">Abort</button>
  </div>
</div>
