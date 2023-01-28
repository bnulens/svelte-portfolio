<script>
  export let lang;
  import { settings, translateLangToName } from "../../scripts/pageStore";

  $: prefLang = $settings.language.preferredLanguage;
  $: isSelectorExpanded = $settings.language.isSelectorExpanded;

  const selectLanguage = (lang) => {
    settings.selectLanguage(lang);
    settings.toggleLangSelector(!isSelectorExpanded);
  };
</script>

<div class="o-lang-option {lang === prefLang ? 'is-selected' : 'option'}">
  <li
    class="o-lang-item"
    on:click={selectLanguage(lang)}
    on:keypress={selectLanguage(lang)}
  >
    <img
      class="lang-icon"
      src="src/assets/icons/countries/{lang}.svg"
      alt="country-icon"
    />
    <p class="lang-name {lang === prefLang ? 'is-highlight' : 'none'}">
      {translateLangToName(lang)}
    </p>
  </li>
</div>
