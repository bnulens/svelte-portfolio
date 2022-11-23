<script>
  export let value;
  export let buildGrid = () => {};

  const eraseGrid = () => {
    let puzzleGrid = document.getElementById("puzzle-grid");
    puzzleGrid.replaceChildren();
  };

  const selectSize = (e) => {
    eraseGrid();
    value = parseInt(e.target.value);
    buildGrid(e.target.value);
  };

  const [small, medium, large, huge] = [9, 16, 25, 36];
</script>

<div class="c-puzzle-difficulty-selector">
  <select bind:value>
    <option value={small} on:click={selectSize}>Small</option>
    <option value={medium} on:click={selectSize}>Medium</option>
    <option value={large} on:click={selectSize}>Large</option>
    <option value={huge} on:click={selectSize}>Huge</option>
  </select>
</div>
