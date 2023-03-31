<script lang='ts'>
  import { slide } from 'svelte/transition';

  export let professor: Professor;
</script>

<li transition:slide|local>
  <a href="/professors/{professor.id}">{professor.name}</a>
</li>

<style>
  a, a:visited {
    color: inherit;
    text-decoration: none;
  }
  li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
</style>