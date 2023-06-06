<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { User } from "../../libjs/model/User";
  import { onMount } from "svelte";
  import { deleteUser, getUsers } from "../../libjs/apis/admin/accounts";
  import { navigate } from "svelte-navigator";
  let headers: string[] = [
    "id",
    "email",
    "role",
    "domain",
    "specialty",
    "actions",
  ];
  let users: User[] = [];

  onMount(async () => {
    getUsers(
      (us) => (users = us),
      () => {
        navigate("/login");
        console.log("failed");
      }
    );
  });
  let addFunction = () => {
    navigate("/admin/users/add");
  };
  let deleteFunction = (id: number) => {
    deleteUser(
      (us) => {
        users = us;
      },
      () => {},
      id
    );
  };
  let editFunction = () => {};
</script>

<div class="w-full h-full">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead
      class="text-xs text-white uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400"
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
      <tr
        class="text-black text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      >
        <td />
        <td />
        <td />
        <td />
        <td />
        <td class="p-5">
          <button
            class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 transform active:scale-75 transition-transform"
            on:click={addFunction}
          >
            <Icon icon="ic:baseline-add" />
          </button>
        </td>
      </tr>
      {#each users as u}
        <tr
          class="text-black text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700"
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
            {#if u.domaine}
              {u.domaine}
            {/if}
          </td>
          <td class="px-6 py-4">
            {#if u.specialty}
              {u.specialty}
            {/if}
          </td>
          <td
            class=" px-6 py-4 flex flex-row justify-center content-center space-x-5"
          >
            <button
              class="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500 transform active:scale-75 transition-transform"
              on:click={() => u.id && deleteFunction(u.id)}
            >
              <Icon class="w-5 h-5 mr-2 -ml-1" icon="ic:baseline-delete" />
              Delete
            </button>
            <button
              class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 transform active:scale-75 transition-transform"
              on:click={editFunction}
            >
              Edit
              <Icon class="w-5 h-5 ml-2 -mr-1" icon="ic:baseline-edit" />
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
