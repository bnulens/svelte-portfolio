<script>
  import { toggleViewMode as viewMode } from "../../scripts/pageStore";
</script>

<div class="c-social-link outer-wrapper">
  <div class="c-social-link inner-wrapper">
    <a
      href="mailto:brechtnulens@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="src/assets/icons/{$viewMode ? 'light' : 'dark'}/mail-{$viewMode
          ? 'light'
          : 'dark'}.svg"
        alt="gmail-link"
      />
    </a>
  </div>
</div>
