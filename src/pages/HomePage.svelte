<script lang="ts">
  import "../app.css";

  import Layout from "../layouts/Layout.svelte";
  import useTimer from "$lib/ts/useTimer";
  import SearchReult from "../components/SearchReult.svelte";

  let query = "";
  let professors: Professor[] = [];

  const showSearchResult = useTimer(async () => {
    professors = query === "" ? [] : await getProfessors(query);
  }, 500);

  const getProfessors = async (query: string): Promise<Professor[]> => {
    const url = `/api/professors?query=${query}`;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await fetch(url, options);
    let json = await res.json();
    return json.data;
  };
</script>

<Layout>
  <!-- TODO: form fallack for no-JS users -->
  <form>
    <input
      type="text"
      name="query"
      id="query"
      bind:value={query}
      on:input={showSearchResult}
    />
  </form>
  <output>
    {#if professors.length === 0}
      <p>Please enter something</p>
    {:else}
      {#each professors as prof}
        <SearchReult professor={prof} />
      {/each}
    {/if}
  </output>
</Layout>
