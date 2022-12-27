<script>
  import { settings } from "../../scripts/pageStore";
</script>

<div class="c-social-link outer-wrapper">
  <div class="c-social-link inner-wrapper">
    <a
      href="https://github.com/bnulens"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="src/assets/icons/{$settings.isDarkMode
          ? 'light'
          : 'dark'}/github-{$settings.isDarkMode ? 'light' : 'dark'}.svg"
        alt="c-social-link"
      />
    </a>
  </div>
</div>
