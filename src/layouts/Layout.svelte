<script lang="ts">
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
</script>

<Header />
<main class="middle">
  <slot />
</main>
<Footer />
