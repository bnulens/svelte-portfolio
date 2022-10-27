<script>
  import LanguageSelector from "./LanguageSelector.svelte";
</script>

<section class="hero outer-wrapper open" id="page-top">
  <div class="hero inner-wrapper">
    <div class="hero space">
      <div class="hero content-wrapper">
        <div class="hero content-left">
          <div class="hero content-left text">
            <h1>Generic Title</h1>
            <div class="hero content-left text-bis">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                cupiditate voluptatum veritatis autem sed sequi nihil minus
                expedita voluptatibus pariatur, alias dicta obcaecati amet
                repellendus repudiandae, dolore ipsa id tenetur.
              </p>
              <div class="hero content-left buttons">
                <LanguageSelector />
                <button>short version</button>
              </div>
            </div>
          </div>
        </div>
        <div class="hero content-right">
          <span>Stan the span</span>
        </div>
      </div>
    </div>
    <div class="hero profile-nav-wrapper">
      <nav class="hero profile-nav">
        <a href="#" class="profile-nav-item">Who am I</a>
        <a href="#" class="profile-nav-item">Projects</a>
        <a href="#" class="profile-nav-item">Academics</a>
        <a href="#" class="profile-nav-item">Career</a>
      </nav>
    </div>
  </div>
</section>
