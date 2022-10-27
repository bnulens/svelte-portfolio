<script>
  import TopicsCard from "./TopicsCard.svelte";

  let cardContent = {
    title: "Career",
    topics: ["2022", "2021"],
    info: [
      {
        year: "2022",
        title: "Full Stack developer",
        organisation: "BROLZ",
        description: "brolz",
        location: ["Liège", "Hasselt"],
        type: "Internship",
      },
      {
        year: "2021",
        title: "Web Developer",
        organisation: "Netropolix",
        description: "netropolix",
        location: ["Geel", "Hasselt"],
        type: "Full-time",
      },
    ],
  };
</script>

<section class="career outer-wrapper">
  <div class="career inner-wrapper">
    <TopicsCard {cardContent} name="career" />
  </div>
</section>
