<script>
  import {
    puzzleSize,
    generateGridArray,
    puzzleArray,
  } from "../../scripts/puzzleStore";

  const [small, medium, large] = [9, 16, 25];

  const selectSize = (n) => {
    puzzleArray.set([]);
    puzzleSize.set(n);
    generateGridArray(n);
  };
</script>

<div class="c-puzzle-difficulty-selector">
  <select>
    <option on:click={() => selectSize(small)}>Small</option>
    <option on:click={() => selectSize(medium)}>Medium</option>
    <option on:click={() => selectSize(large)}>Large</option>
  </select>
</div>
