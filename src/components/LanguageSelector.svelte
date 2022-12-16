<script>
  import { toggleViewMode as viewMode } from "../scripts/pageStore";
</script>

<div class="c-page-btn wrapper">
  <button class="o-btn medium square lang-selector">
    <img
      src="src/assets/icons/{viewMode ? 'dark' : 'light'}/language-{viewMode
        ? 'dark'
        : 'light'}.svg"
      alt="language-icon"
    />
  </button>
</div>
