<script>
  import { t } from "../../i18n/i18n";

  import LanguageButton from "../LanguageSelector/LanguageButton.svelte";
  import ToggleResume from "../PageButtons/ToggleResume.svelte";
  import ToggleViewMode from "../PageButtons/ToggleViewMode.svelte";
  import Puzzle from "../Puzzle/Puzzle.svelte";
</script>

<section class="c-hero">
  <div class="o-outer-wrapper is-light">
    <div class="o-inner-wrapper ">
      <div class="o-space">
        <div class="o-content-wrapper">
          <div class="o-content-left">
            <h1 class="e-main-title">{$t("content.hero.title")}</h1>
            <p class="line-txt s tal-justify lh-xl">
              {$t("content.hero.sub_title")}
            </p>
            <div class="o-content-left buttons">
              <LanguageButton />
              <ToggleResume />
              <ToggleViewMode />
            </div>
          </div>
        </div>
        <div class="o-content-right">
          <Puzzle />
        </div>
      </div>
    </div>
    <div class="o-profile-nav-wrapper">
      <nav class="o-profile-nav">
        <a href="/" class="o-profile-nav-item"
          >{$t("content.navigation.link_1")}</a
        >
        <a href="/" class="o-profile-nav-item"
          >{$t("content.navigation.link_2")}</a
        >
        <a href="/" class="o-profile-nav-item"
          >{$t("content.navigation.link_3")}</a
        >
        <a href="/" class="o-profile-nav-item"
          >{$t("content.navigation.link_4")}</a
        >
      </nav>
    </div>
  </div>
</section>
