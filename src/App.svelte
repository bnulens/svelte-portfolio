<script>
  import Summary from "./components/Summary.svelte";
  import Hero from "./components/Hero.svelte";
  import Profile from "./components/Profile.svelte";
  import Academics from "./components/Academics.svelte";
  import Projects from "./components/Projects.svelte";
  import Footer from "./components/Footer.svelte";
  import Career from "./components/Career.svelte";
</script>

<div class="app-inner-wrapper">
  <div class="app-bootstrap">
    <Hero />
    <Profile />
    <Projects />
    <Career />
    <Academics />
    <Footer />
  </div>
  <Summary />
</div>
