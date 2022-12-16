<script>
  import { toggleViewMode, toggleResume } from "../../scripts/pageStore";
  import LanguageSelector from "../LanguageSelector.svelte";
  import Puzzle from "../Puzzle/Puzzle.svelte";
</script>

<section class="c-hero">
  <div class="o-outer-wrapper is-light">
    <div class="o-inner-wrapper ">
      <div class="o-space">
        <div class="o-content-wrapper">
          <div class="o-content-left-wrapper">
            <div class="o-content-left">
              <h1 class="e-main-title">Generic Title</h1>
              <div class="o-content-left text">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla cupiditate voluptatum veritatis autem sed sequi nihil
                  minus expedita voluptatibus pariatur, alias dicta obcaecati
                  amet repellendus repudiandae, dolore ipsa id tenetur.
                </p>
                <div class="o-content-left buttons">
                  <LanguageSelector />
                  <button>short version</button>
                </div>
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
  </div>
</section>
