<script>
  import { settings } from "../../scripts/pageStore";

  const toggle = () => settings.toggleViewMode(!$settings.isDarkMode);
</script>

<div class="c-page-btn wrapper">
  <button
    class="o-btn small {$settings.isDarkMode ? 'is-dark' : 'is-light'}"
    on:click={toggle}
  >
    <img
      class="o-btn-icon"
      src="src/assets/icons/{$settings.isDarkMode
        ? 'light'
        : 'dark'}/{$settings.isDarkMode ? 'sun-light' : 'moon-dark'}.svg"
      alt="view-mode-icon"
    />
  </button>
</div>
