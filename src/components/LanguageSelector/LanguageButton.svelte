<script>
  import { settings } from "../../scripts/pageStore";
  import { t, locales } from "../../i18n/i18n";
  import LanguageSelector from "./LanguageSelector.svelte";

  $: prefLang = $settings.language.preferredLanguage;
  $: isSelectorExpanded = $settings.language.isSelectorExpanded;

  const toggleSelectorList = () => {
    settings.toggleLangSelector(!isSelectorExpanded);
  };
</script>

<div class="c-language-selector-button">
  <div class="c-language-selector-button wrapper">
    <button class="o-language-selector-button" on:click={toggleSelectorList}
      ><img
        class="o-language-selector icon"
        src="src/assets/icons/countries/{prefLang}.svg"
        alt="country-flag"
      />
      <p class="btn-text sm">
        {$t("utils.buttons.lang")}
      </p>
    </button>
  </div>
  {#if isSelectorExpanded}
    <LanguageSelector {locales} {isSelectorExpanded} />
  {/if}
</div>
