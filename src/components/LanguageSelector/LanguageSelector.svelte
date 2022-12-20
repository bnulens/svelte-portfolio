<script>
  import { pageSettings } from "../../scripts/pageStore";

  import LanguageOption from "./LanguageOption.svelte";

  let alllanguages = ["en", "es", "fr", "nl"];
  let indexOfSelected = alllanguages.indexOf($pageSettings.toggleLanguage);
  let otherLanguages = alllanguages.splice(alllanguages[indexOfSelected], 1);

  console.log($pageSettings.toggleLanguage);
</script>

<div class="c-lang-selector">
  <img src="/src/assets/" alt="" />
  {$pageSettings.toggleLanguage}
  <ul class="c-lang-selector lang-list">
    {#each otherLanguages as lang}
      <LanguageOption {lang} />
    {/each}
  </ul>
</div>
