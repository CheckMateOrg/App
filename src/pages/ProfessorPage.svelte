<script lang="ts">
  import "../app.css";

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
  <!-- <p>@ {professor.school_id}</p> -->
  <p>@ UCSD</p>
  <button>+</button>
  <div class="reviews">
    {#await promise then reviews}
      {#each reviews as review}
        <Feedback {review} />
      {/each}
    {/await}
  </div>
</Layout>

<style>
  h1 {
    margin: 0;
    margin-top: 2rem;
    font-size: 4rem;
    font-weight: normal;
  }

  p {
    margin: 0;
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }

  button {
    width: 100%;
    margin: 3rem 0;
    padding: 0.5rem;
    border: none;
    border-radius: 16px;
    font-size: 2rem;
    color: var(--secondary-color);
    background-color: var(--action-color);
  }

  button:hover {
    cursor: pointer;
  }

  .reviews {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
</style>