<script lang="ts">
  import Upvote from "./icons/Upvote.svelte";
  import Downvote from "./icons/Downvote.svelte";

  export let score = 0;

  type Status = "upvote" | "downvote" | "neutral";

  let status_score_map: { [key in Status]: number } = {
    upvote: 1,
    downvote: -1,
    neutral: 0,
  };

  let status: Status = "neutral";

  const action_color = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--action-color");

  const toggleUpvote = () => {
    status = status === "upvote" ? "neutral" : "upvote";
  };

  const toggleDownvote = () => {
    status = status === "downvote" ? "neutral" : "downvote";
  };
</script>

<div class="votes">
  <Upvote
    on:click={toggleUpvote}
    border_color={status === "upvote" ? action_color : "black"}
    inner_color={status === "upvote" ? action_color : "white"}
    arrow_color={status === "upvote" ? "white" : "black"}
  />

  <span class={status === "neutral" ? "" : "voted"}
    >{score + status_score_map[status]}</span
  >

  <Downvote
    on:click={toggleDownvote}
    border_color={status === "downvote" ? action_color : "black"}
    inner_color={status === "downvote" ? action_color : "white"}
    arrow_color={status === "downvote" ? "white" : "black"}
  />
</div>

<style>
  .votes {
    position: absolute;
    top: var(--padding);
    right: var(--padding);
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  span {
    width: 3ch;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-family: inherit;
  }

  span.voted {
    color: var(--action-color);
  }
</style>
