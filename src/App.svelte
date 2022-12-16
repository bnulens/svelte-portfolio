<script>
  import Summary from "./components/Summary.svelte";
  import Hero from "./components/Sections/Hero.svelte";
  import Profile from "./components/Sections/Profile.svelte";
  import Academics from "./components/Sections/Academics.svelte";
  import Projects from "./components/Sections/Projects.svelte";
  import Footer from "./components/Sections/Footer.svelte";
  import Career from "./components/Sections/Career.svelte";
  import ToggleViewMode from "./components/ToggleViewMode.svelte";
</script>

<div class="app-inner-wrapper">
  <ToggleViewMode />
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
