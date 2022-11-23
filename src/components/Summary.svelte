<script>
  import GithubLink from "./Socials/GithubLink.svelte";
  import LinkedInLink from "./Socials/LinkedInLink.svelte";
  import GmailLink from "./Socials/GmailLink.svelte";
  import PhoneLink from "./Socials/PhoneLink.svelte";
</script>

<div class="o-outer-wrapper">
  <div class="o-inner-wrapper">
    <div class="summary header">
      <div class="summary heading-wrapper">
        <div class="summary heading">
          <h2 class="summary title-2">Brecht Nulens</h2>
          <h5 class="summary title-5">Front end developer</h5>
        </div>
        <div class="summary exit-cross">
          <span />
          <span />
        </div>
      </div>
      <p class="summary synopsis">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
        perspiciatis alias neque delectus! Sunt nihil illo deleniti fugiat nemo
        odio inventore similique, quam dicta modi ad possimus, consequatur
        architecto nobis. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Maxime perspiciatis alias neque delectus! Sunt nihil illo deleniti
        fugiat nemo odio inventore similique, quam dicta modi ad possimus,
        consequatur architecto nobis.
      </p>
      <div class="summary contact-bar">
        <div class="contact-bar inner-wrapper">
          <nav class="contact-bar nav">
            <div class="contact-bar nav-item">
              <a href="mailto:brechtnulens@gmail.com"><GmailLink /></a>
              <span class="icon-description">brechtnulens@gmail.com</span>
            </div>
            <div class="contact-bar nav-item">
              <a
                href="https://www.linkedin.com/in/brecht-nulens/"
                rel="noopener noreferer"
                target="_blank"><LinkedInLink /></a
              >
            </div>
            <div class="contact-bar nav-item">
              <a href="https://github.com/bnulens"><GithubLink /></a>
              <span class="icon-description">github.com/bnulens</span>
            </div>
            <div class="contact-bar nav-item">
              <a href="tel:+32494749731"><PhoneLink /></a>
              <span class="icon-description">+32 494 74 97 31</span>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="summary body">
      <div class="summary left-column">
        <div class="column-wrapper">
          <h3>Goals</h3>
          <ul class="column list">
            <li>
              Improve and build on current skills with real life projects.
            </li>
            <li>
              Finding the right company that allows me to grow and is focused on
              JavaScript.
            </li>
            <li>Become the best developer I can potentially be.</li>
          </ul>
        </div>
        <div class="column-wrapper">
          <h3>Qualities</h3>
          <ul class="column list">
            <li>Reliable</li>
            <li>Curious</li>
            <li>Eager to learn</li>
            <li>Teamplayer</li>
            <li>Always hungry</li>
          </ul>
        </div>
      </div>
      <div class="summary right-column">
        <div class="column-wrapper">
          <h3>Career</h3>
          <ul class="column list">
            <li>A</li>
          </ul>
        </div>
        <div class="column-wrapper">
          <h3>Skills</h3>
          <ul class="column list">
            <li>A</li>
          </ul>
        </div>
        <div class="column-wrapper">
          <h3>Academics</h3>
          <ul class="column list">
            <li>A</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
