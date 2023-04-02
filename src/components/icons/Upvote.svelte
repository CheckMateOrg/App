<script lang="ts">
  export let border_color = "black";
  export let inner_color = "white";
  export let arrow_color = "black";
</script>

<svg
  fill="none"
  height="30px"
  width="30px"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  on:click
  on:keypress
>
  <path
    id="circle"
    d="M 0 15 C 0 6.71371 6.71371 0 15 0 C 23.2863 0 30 6.71371 30 15 C 30 23.2863 23.2863 30 15 30 C 6.71371 30 0 23.2863 0 15 Z"
  />

  <!-- clip outer stroke -->
  <clipPath id="innerCircleOnly">
    <use xlink:href="#circle" />
  </clipPath>

  <!-- draw the circle -->
  <use xlink:href="#circle" style:fill={inner_color} />

  <!-- draw the stoke -->
  <use
    xlink:href="#circle"
    style:stroke-width="4"
    style:stroke={border_color}
    fill="none"
    clip-path="url(#innerCircleOnly)"
  />

  <!-- draw the arrow -->
  <path
    d="M 17.6613 22.0161 V 15 H 21.9496 C 22.5968 15 22.9234 14.2137 22.4637 13.7601 L 15.5141 6.84677 C 15.2298 6.5625 14.7762 6.5625 14.4919 6.84677 L 7.53629 13.7601 C 7.07661 14.2198 7.40323 15 8.0504 15 H 12.3387 V 22.0161 C 12.3387 22.4153 12.6653 22.7419 13.0645 22.7419 H 16.9355 C 17.3347 22.7419 17.6613 22.4153 17.6613 22.0161 Z"
    style:fill={arrow_color}
  />
</svg>

<style>
  svg {
    cursor: pointer;
  }

  use,
  path {
    transition: fill 0.25s ease-in, stroke 0.25s ease-in;
  }
</style>
