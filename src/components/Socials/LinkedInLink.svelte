<script>
  import { settings } from "../../scripts/pageStore";
</script>

<div class="c-social-link outer-wrapper">
  <div class="c-social-link inner-wrapper">
    <a
      href="https://www.linkedin.com/in/brecht-nulens/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="src/assets/icons/{$settings.isDarkMode
          ? 'light'
          : 'dark'}/linkedin-{$settings.isDarkMode ? 'light' : 'dark'}.svg"
        alt="linkedin-link"
      />
    </a>
  </div>
</div>
