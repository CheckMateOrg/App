<script lang="ts">
  import Feedback from "../components/Feedback.svelte";
  import Layout from "../layouts/Layout.svelte";

  export let professor: Professor;

  const getReviews = async (ids: string[]): Promise<Review[]> => {
    const url = `/api/reviews?ids=${ids}`;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await fetch(url, options);
    let json = await res.json();
    return json.data;
  };

  let promise = getReviews(professor.review_ids);
</script>

<Layout>
  <h1>{professor.name}</h1>
  <button>+</button>
  {#await promise then reviews}
    {#each reviews as review}
      <Feedback {review} />
    {/each}
  {/await}
</Layout>
