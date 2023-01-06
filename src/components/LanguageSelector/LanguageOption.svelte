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

<div
  class="o-lang-option wrapper {lang === prefLang ? 'is-selected' : 'option'}"
>
  <li class="o-lang-option" on:click={selectLanguage(lang)}>
    <img
      class="o-lang-option icon"
      src="src/assets/icons/countries/{lang}.svg"
      alt="country-icon"
    />
    <p class="o-lang-option name">{translateLangToName(lang)}</p>
  </li>
</div>
