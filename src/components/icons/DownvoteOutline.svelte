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
    d="M 12.3387 7.98387 V 15 H 8.0504C7.40323 15 7.07661 15.7863 7.53629 16.2399 L 14.4859 23.1532 C 14.7702 23.4375 15.2238 23.4375 15.5081 23.1532 L 22.4577 16.2399 C 22.9173 15.7802 22.5907 15 21.9435 15 H 17.6613 V 7.98387 C 17.6613 7.58468 17.3347 7.25806 16.9355 7.25806 H 13.0645C12.6653 7.25806 12.3387 7.58468 12.3387 7.98387 Z"
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
