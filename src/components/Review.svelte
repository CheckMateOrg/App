<script lang="ts">
  import Votes from "./Votes.svelte";

    export let review: Review;
</script>

<div class="review">
  <p class="score"><span>{review.score}</span> / 10</p>
  <div class="review-body">
    <h2>{review.course}</h2>
    <p>{review.message}</p>
  </div>
  <Votes />
  <p class="date">{review.date} </p>
</div>

<style>
  p {
    margin: 0;
  }

  .review {
    --padding: 1.5rem;
    --date-width: 8rem;
    --score-width: 8rem;
    min-height: 12.5rem;
    position: relative;
    padding: var(--padding);
    border-radius: 1rem;
    color: var(--main-color);
    background-color: var(--secondary-color);
  }

  .review-body {
    width: calc(100% - var(--score-width) - var(--date-width));
    margin-left: 8rem;
  }

  .review-body h2 {
    margin: 0.5rem 0;
    font-size: 2rem;
  }

  .review-body p {
    width: 60ch;
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }

  .score, .date {
    position: absolute;
  }

  .score {
    top: var(--padding);
    left: var(--padding);
    padding: 0.75rem;
    border-radius: 0.75rem;
    color: var(--secondary-color);
    background-color: var(--action-color);
  }

  .score span {
    font-size: 2rem;
  }

  .date {
    bottom: var(--padding);
    right: var(--padding);
    font-weight: bold;
  }
</style>
