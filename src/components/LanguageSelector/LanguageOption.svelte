<script>
  export let lang;
  import { pageSettings } from "../../scripts/pageStore";

  const selectLanguage = (lang) => {
    pageSettings.toggleLanguage.set();
  };
</script>

<div class="c-lang-option wrapper">
  <li class="o-lang-option">
    <img src="src/assets/icons/countries/${lang}.svg" alt="country-icon" />
  </li>
</div>
