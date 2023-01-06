<script>
  import { t } from "../../i18n/i18n";

  import LanguageButton from "../LanguageSelector/LanguageButton.svelte";
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
              <button>short version</button>
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
        <a href="/" class="o-profile-nav-item">Who am I</a>
        <a href="/" class="o-profile-nav-item">Projects</a>
        <a href="/" class="o-profile-nav-item">Academics</a>
        <a href="/" class="o-profile-nav-item">Career</a>
      </nav>
    </div>
  </div>
</section>
