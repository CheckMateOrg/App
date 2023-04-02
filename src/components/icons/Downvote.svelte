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
    d="M 12.3387 7.98387 V 15 H 8.0504C7.40323 15 7.07661 15.7863 7.53629 16.2399 L 14.4859 23.1532 C 14.7702 23.4375 15.2238 23.4375 15.5081 23.1532 L 22.4577 16.2399 C 22.9173 15.7802 22.5907 15 21.9435 15 H 17.6613 V 7.98387 C 17.6613 7.58468 17.3347 7.25806 16.9355 7.25806 H 13.0645C12.6653 7.25806 12.3387 7.58468 12.3387 7.98387 Z"
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
