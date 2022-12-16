<script>
  import { toggleViewMode as viewMode } from "../../scripts/pageStore";
</script>

<div class="c-social-link outer-wrapper">
  <div class="c-social-link inner-wrapper">
    <a
      href="https://github.com/bnulens"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="src/assets/icons/{$viewMode ? 'light' : 'dark'}/github-{$viewMode
          ? 'light'
          : 'dark'}.svg"
        alt="c-social-link"
      />
    </a>
  </div>
</div>
