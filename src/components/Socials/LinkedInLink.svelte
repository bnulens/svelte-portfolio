<script>
  import { toggleViewMode as viewMode } from "../../scripts/pageStore";
</script>

<div class="c-social-link outer-wrapper">
  <div class="c-social-link inner-wrapper">
    <a
      href="https://www.linkedin.com/in/brecht-nulens/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="src/assets/icons/{$viewMode ? 'light' : 'dark'}/linkedin-{$viewMode
          ? 'light'
          : 'dark'}.svg"
        alt="linkedin-link"
      />
    </a>
  </div>
</div>
