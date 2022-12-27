<script>
  import { settings } from "../../scripts/pageStore";
</script>

<div class="c-social-link outer-wrapper">
  <div class="c-social-link inner-wrapper">
    <a href="tel:+32494749731" rel="noopener noreferrer">
      <img
        src="src/assets/icons/{$settings.isDarkMode
          ? 'light'
          : 'dark'}/telephone-{$settings.isDarkMode ? 'light' : 'dark'}.svg"
        alt="phone-link"
      />
    </a>
  </div>
</div>
