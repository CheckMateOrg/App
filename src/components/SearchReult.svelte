<script lang='ts'>
  import { slide } from 'svelte/transition';

  export let professor: Professor;
</script>

<li transition:slide|local>
  <a href="/professors/{professor.id}">{professor.name} @ UCSD</a>
</li>

<style>
  a, a:visited {
    color: inherit;
    text-decoration: none;
  }

  a {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    display: block;
    background-color: rgb(234, 234, 234);
    transition: all 0.5s ease;
  }

  a:hover {
    color: var(--secondary-color);
    background-color: var(--main-color);
  }

  li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
</style>