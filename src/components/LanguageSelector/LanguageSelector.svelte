<script>
  export let allLanguages;
  import LanguageOption from "./LanguageOption.svelte";
</script>

<div class="c-lang-selector">
  <ul class="o-lang-selector lang-list">
    {#each allLanguages as lang}
      <LanguageOption {lang} />
    {/each}
  </ul>
</div>
