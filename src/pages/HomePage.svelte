<script lang="ts">
  import { slide } from 'svelte/transition';

  import "../app.css";

  import useTimer from "$lib/ts/useTimer";
  import Layout from "../layouts/Layout.svelte";
  import SearchReult from "../components/SearchReult.svelte";

  let query = "";
  let professors: Professor[] = [];
  $: showSearchReult = professors.length !== 0;

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
  <h1>CheckMate</h1>
  <form>
    <input
      type="text"
      name="query"
      id="query"
      placeholder="Enter here..."
      bind:value={query}
      on:input={showSearchResult}
      class="{showSearchReult ? 'expanded': ''}"
    />
  </form>
  {#if showSearchReult}
    <ul transition:slide>
      {#each professors as prof}
        <SearchReult professor={prof} />
      {/each}
    </ul>
  {/if}
</Layout>

<style>
  h1 {
    margin: 2rem;
    margin-top: 20%;
    text-align: center;
    font-size: 5rem;
    font-weight: normal;
  }

  form {
    display: flex;
    justify-content: center;
  }

  input {
    width: 30rem;
    padding: 1.25rem;
    border: none;
    border-radius: 1.5rem;
    font-size: 1.5rem;
    transition: all 0.3s ease-out;
    z-index: 10;
  }

  input:hover {
    cursor: pointer;
  }

  input:hover, input:focus, input.expanded {
    width: 40rem;
  }

  ul {
    --overlap: 3rem;
    width: 40rem;
    margin: 0 auto;
    padding: var(--overlap) 1.25rem 1.25rem 1.25rem;
    border-radius: 1.5rem;
    color: var(--main-color);
    background-color: var(--secondary-color);
    transform: translateY(calc(-1 * var(--overlap)));
    z-index: 0;
  }
</style>