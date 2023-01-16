<script>
  import { t } from "../../i18n/i18n";
  import { settings } from "../../scripts/pageStore";

  $: isResumeExpanded = $settings.isResumeExpanded;

  const toggleResume = () => {
    settings.toggleResume(!isResumeExpanded);
    return;
  };
</script>

<div class="o-toggle-resume">
  <button class="e-toggle" on:click={toggleResume}
    >{$t("utils.buttons.skip")}</button
  >
</div>
