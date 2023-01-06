<script>
  export let cardContent;

  let { title, topics, info } = cardContent;
</script>

<section class="topicscard section">
  <div class="topicscard section heading">
    <h2>{title}</h2>
    <p />
  </div>
  <div class="topicscard section-table">
    <div class="topicscard section-table left-column">
      <ul class="topicscard list">
        {#if !topics}
          <p>Nothing to display</p>
        {:else}
          {#each topics as subject}
            <li class="topicscard list-item">
              <h3>{subject}</h3>
            </li>
          {/each}
        {/if}
      </ul>
    </div>
    <div class="topicscard section-table right-column">
      <ul class="topicscard window">
        {#if !info}
          <p>Nothing to display</p>
        {:else}
          {#each info as data}
            <li class="topicscard window-pane">
              <article>
                <h3>{data.title}</h3>
                <div class="topicscard extras">
                  <div class="topicscard extras-heading">
                    <p>{data.organisation}</p>
                    <p>{data.type}</p>
                  </div>
                  <ul>
                    {#each data.location as location}
                      <li>
                        <span class="topicscard extra-bullet" />
                        <h5 class="topicscard extra-item">{location}</h5>
                      </li>
                    {/each}
                  </ul>
                </div>
                <p>{data.description}</p>
              </article>
            </li>
          {/each}
        {/if}
      </ul>
    </div>
  </div>
</section>
