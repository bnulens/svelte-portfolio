<script>
  export let lang;
  import { settings } from "../../scripts/pageStore";

  let langString;
  $: prefLang = $settings.language.preferredLanguage;

  lang === "en"
    ? (langString = "English")
    : lang === "nl"
    ? (langString = "Nederlands")
    : lang === "fr"
    ? (langString = "Français")
    : lang === "es"
    ? (langString = "Español")
    : (langString = "en");

  const selectLanguage = (lang) => {
    settings.selectLanguage(lang);
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
    <p class="o-lang-option name">{langString}</p>
  </li>
</div>
