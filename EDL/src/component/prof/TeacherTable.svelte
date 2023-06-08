<script lang=ts>
  import Icon from "@iconify/svelte";
  let headers: string[] = ["Encoding", "Module", "Note"];
  let users: any[] = [];
</script>

<div class="w-full h-full">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        {#each headers as h}
          <th class="px-6 py-3 text-center">
            {h}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each users as u}
        <tr
          class="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">
            {u.id}
          </td>
          <td class="px-6 py-4">
            {u.email}
          </td>
          <td class="px-6 py-4">
            {u.role}
          </td>
          <td class="px-6 py-4">
            {u.domaine}
          </td>
          <td class="px-6 py-4">
            {u.specialty}
          </td>
          <td
            class=" px-6 py-4 flex flex-row justify-center content-center space-x-5"
          >
            <button
              class="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500 transform active:scale-75 transition-transform"
            >
              <Icon class="w-5 h-5 mr-2 -ml-1" icon="ic:baseline-delete" />
              Delete
            </button>
            <button
              class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 transform active:scale-75 transition-transform"
            >
              Edit
              <Icon class="w-5 h-5 ml-2 -mr-1" icon="ic:baseline-edit" />
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="p-5 text-right">
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </div>
</div>
