<script lang="ts">
  import Layout from "../layouts/Layout.svelte";

  export let professor: Professor;

  const getReviews = async (ids: string[]): Promise<Professor[]> => {
    const url = `/api/professors?ids=${ids}`;
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
  <h1>{professor.name}</h1>
  <div id="add-review">+</div>
</Layout>
