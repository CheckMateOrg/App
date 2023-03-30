<script lang="ts">
  import Layout from "../layouts/Layout.svelte";

  let query = "";
  let professors: Professor[] = [];

  const useTimer = (cb: Function, ms: number = 1000) => {
    let timer: number | undefined;

    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(cb, ms);
    }
  }

  const showSearchResult = useTimer(async () => {
    professors = query === "" ? [] : await getProfessors(query);
  }, 500);

  const getProfessors = async (query: string): Promise<Professor[]> => {
    const url = `/api/professors?query=${query}`;
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let res = await fetch(url, options);
    let json = await res.json();
    return json.data;
  }
</script>

<Layout>
  <!-- TODO: form fallack for no-JS users -->
  <form>
    <input type="text" name="query" id="query" bind:value={query} on:input={showSearchResult}/>
  </form>
  <output>
    {#if professors.length === 0}
      <p>Please enter something</p>
    {:else}
      {#each professors as prof}
        <p>{prof.name}</p>
      {/each}
    {/if}
  </output>
</Layout>
