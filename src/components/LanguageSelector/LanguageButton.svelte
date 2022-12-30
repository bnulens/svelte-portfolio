<script>
  import { settings, allLanguages } from "../../scripts/pageStore";
  import LanguageSelector from "./LanguageSelector.svelte";

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
        src="src/assets/icons/countries/{$settings.language
          .preferredLanguage}.svg"
        alt="country-flag"
      />
      <p class="btn-text sm">
        {$settings.language.preferredLanguage}
      </p>
    </button>
  </div>
  {#if isSelectorExpanded}
    <LanguageSelector {allLanguages} />
  {/if}
</div>
