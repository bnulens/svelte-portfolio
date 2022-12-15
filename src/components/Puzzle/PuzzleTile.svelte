<script>
  export let puzzleSizeString;
  export let puzzleSizeValue;
  export let tileValue;
</script>

<div class="c-puzzle-tile">
  {#if tileValue === puzzleSizeValue - 1}
    <span />
  {:else}
    <img
      class="o-puzzle-tile-image"
      src={`src/assets/images/puzzle/${puzzleSizeString}/${tileValue}.jpg`}
      alt="puzzle-piece"
    />
  {/if}
</div>
