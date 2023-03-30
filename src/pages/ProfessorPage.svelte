<script lang="ts">
  import Feedback from "../components/Feedback.svelte";
  import Layout from "../layouts/Layout.svelte";

  export let professor: Professor;

  const getReviews = async (ids: string[]): Promise<Review[]> => {
    const url = `/api/reviews?id=${ids}`;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await fetch(url, options);
    let json = await res.json();
    return json.data;
  };

  let reviews = getReviews(professor.review_ids);
</script>

<Layout>
  <h1>{professor.name}</h1>
  <div id="add-review">+</div>
  {#await reviews then reviews}
    {#each reviews as review}
      <Feedback {review} />
    {/each}
  {/await}
</Layout>
