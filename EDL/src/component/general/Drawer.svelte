<script lang="ts">
  
  import FormAdd from "./FormAdd.svelte";
  import Icon from "@iconify/svelte";
  let hide = true;

</script>
  

<button on:click={() => (hide = false)}> Show </button>

<div
  class="fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-4/12"
  class:translate-x-full={hide}
>
  <button
    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    on:click={() => (hide = true)}
  >
    <Icon class="w-5 h-5" icon="ph:x-bold" />
    <span class="sr-only">Close menu</span>
  </button>
  <slot>stuff</slot>
</div>
