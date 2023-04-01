<script lang="ts">
  export let color = "black";
</script>

<svg
  fill="none"
  height="30.5px"
  width="30.5px"
  xmlns="http://www.w3.org/2000/svg"
  on:click
  on:keypress
>
  <path
    d="M 17.6613 22.0161 V 15 H 21.9496 C 22.5968 15 22.9234 14.2137 22.4637 13.7601 L 15.5141 6.84677 C 15.2298 6.5625 14.7762 6.5625 14.4919 6.84677 L 7.53629 13.7601 C 7.07661 14.2198 7.40323 15 8.0504 15 H 12.3387 V 22.0161 C 12.3387 22.4153 12.6653 22.7419 13.0645 22.7419 H 16.9355 C 17.3347 22.7419 17.6613 22.4153 17.6613 22.0161 Z"
    fill={color}
  />
  <path
    d="M 29.57 15.29 C 29.57 23.18 23.18 29.57 15.29 29.57 C 7.39 29.57 1.0 23.18 1.0 15.29 C 1.0 7.39 7.39 1.0 15.29 1.0 C 23.18 1.0 29.57 7.39 29.57 15.29 Z"
    stroke={color}
    stroke-width="2"
    fill="none"
  />
</svg>

<style>
  svg:hover {
    cursor: pointer;
  }
</style>
