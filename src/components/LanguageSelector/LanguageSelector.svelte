<script>
  export let locales;
  export let isSelectorExpanded;
  import LanguageOption from "./LanguageOption.svelte";
</script>

<div class="c-lang-selector {isSelectorExpanded ? 'is-closed' : 'is-open'}">
  <ul class="o-lang-selector lang-list">
    {#each locales as lang}
      <LanguageOption {lang} />
    {/each}
  </ul>
</div>
