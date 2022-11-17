<script>
  import LanguageSelector from "./LanguageSelector.svelte";
</script>

<section class="c-hero has-expandable is-closed">
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
          <div class="content-right">
            <span>Stan the span</span>
          </div>
        </div>
      </div>
      <div class="profile-nav-wrapper">
        <nav class="profile-nav">
          <a href="#" class="profile-nav-item">Who am I</a>
          <a href="#" class="profile-nav-item">Projects</a>
          <a href="#" class="profile-nav-item">Academics</a>
          <a href="#" class="profile-nav-item">Career</a>
        </nav>
      </div>
    </div>
  </div>
</section>
