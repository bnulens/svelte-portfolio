<script>
  import TopicsCard from "../TopicsCard.svelte";

  let cardContent = {
    title: "Academics",
    topics: [
      "2020-now",
      "2019",
      "2018-2019",
      "2014-2018",
      "2013-2014",
      "2007-2013",
    ],
    info: [
      {
        year: "2020-now",
        title: "Still learning",
        organisation: "Independent",
        description: "",
        location: ["Hasselt"],
        type: "",
      },
      {
        year: "2019",
        title: "BeCode Developer bootcamp",
        organisation: "BeCode Belgium",
        description: "",
        location: ["Genk"],
        type: "Full-time",
      },
      {
        year: "2018-2019",
        title: "Associate Network Engineer",
        organisation: "SYNTRA Limburg",
        description: "",
        location: ["Genk"],
        type: "Full-time",
      },
      {
        year: "2014-2018",
        title: "Bachelor Graphic Design",
        organisation: "PXL Media, Arts & Design",
        description: "",
        location: ["Hasselt"],
        type: "Full-time",
      },
      {
        year: "2013-2014",
        title: "Bachelor Product Design",
        organisation: "Media, Arts & Design KULeuven",
        description: "",
        location: ["Genk"],
        type: "Full-time",
      },
      {
        year: "2007-2013",
        title: "Latin & Modern Languages",
        organisation: "Royal Atheneum Hasselt",
        description: "",
        location: ["Hasselt"],
        type: "Full-time",
      },
    ],
  };
</script>

<section class="c-academics">
  <div class="o-outer-wrapper">
    <div class="o-inner-wrapper">
      <TopicsCard {cardContent} name="academics" />
    </div>
  </div>
</section>
