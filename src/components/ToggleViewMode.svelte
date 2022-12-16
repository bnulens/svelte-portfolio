<script>
  import { toggleViewMode as viewMode } from "../scripts/pageStore";

  const toggle = () => viewMode.set(!$viewMode);
</script>

<div class="c-page-btn wrapper">
  <button
    class="o-btn small {$viewMode ? 'is-dark' : 'is-light'}"
    on:click={toggle}
  >
    <img
      class="o-btn-icon"
      src="src/assets/icons/{$viewMode ? 'light' : 'dark'}/{$viewMode
        ? 'sun-light'
        : 'moon-dark'}.svg"
      alt="view-mode-icon"
    />
  </button>
</div>
