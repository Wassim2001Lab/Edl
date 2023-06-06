<script lang="ts">
  export let hide;
</script>

<section id="content" class:hide>
  <slot>
    <div class="w-full h-full bg-pink-500" />
  </slot>
</section>

<style>
  section {
    position: absolute;
    top: 56px;
    right: 0;
    width: calc(100% - 280px);
    height: calc(100% - 56px);
    transition: 0.3s ease;
    overflow-y: scroll;
  }
  .hide {
    width: calc(100% - 60px);
  }
</style>
