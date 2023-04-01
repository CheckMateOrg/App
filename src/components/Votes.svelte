<script lang="ts">
  import Upvote from "./icons/Upvote.svelte";
  import Downvote from "./icons/Downvote.svelte";
  import UpvoteOutline from "./icons/UpvoteOutline.svelte";
  import DownvoteOutline from "./icons/DownvoteOutline.svelte";

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
  {#if status === "upvote"}
    <Upvote color={action_color} on:click={toggleUpvote} />
  {:else}
    <UpvoteOutline on:click={toggleUpvote} />
  {/if}

  <span class={status === "neutral" ? "" : "voted"}
    >{score + status_score_map[status]}</span
  >

  {#if status === "downvote"}
    <Downvote color={action_color} on:click={toggleDownvote} />
  {:else}
    <DownvoteOutline on:click={toggleDownvote} />
  {/if}
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
