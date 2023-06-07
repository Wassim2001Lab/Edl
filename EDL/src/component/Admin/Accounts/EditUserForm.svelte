<script lang="ts">
  import Icon from "@iconify/svelte";
  import {
    addUser,
    getUser,
    updateUser,
  } from "../../../libjs/apis/admin/accounts";
  import { navigate } from "svelte-navigator";
  import type { User } from "../../../libjs/model/User";
  import { onMount } from "svelte";
  export let id: number;
  let available = false;
  let user: User;
  let cannot_add_user = false;

  onMount(async () => {
    getUser(
      (u) => {
        user = u;
        available = true;
      },
      () => {},
      id
    );
  });

  let submit = () => {
    updateUser(
      (us) => {
        navigate("/admin/users");
      },
      () => {
        cannot_add_user = true;
      },
      user
    );
  };
</script>

{#if available}
  <div
    class=" w-full h-full p-10 ease-linear duration-200 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
  >
    <p
      class="mb-10 text-5xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
    >
      Add User
    </p>
    <div class="h-5" />
    <div class="w-full grid grid-flow-row grid-cols-2 gap-5">
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          bind:value={user.email}
          required
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email address</label
        >
      </div>

      <div class="relative z-0 w-full mb-6 group">
        <select
          id="small"
          class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          bind:value={user.role}
        >
          <option selected value="Applicant">Applicant</option>
          <option value="CFD">CFD</option>
          <option value="ViceDoyen">Vice Doyen</option>
          <option value="Professor">Professor</option>
        </select>
      </div>

      <div class="relative z-0 w-full mb-6 group">
        <select
          id="small"
          class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          bind:value={user.domaine}
          placeholder="Domaine"
        >
          <option selected value="Informatique">Informatique</option>
        </select>
      </div>
      {#if user.role && !["ViceDoyen", "Admin"].includes(user.role)}
        <div class="relative z-0 w-full mb-6 group">
          <select
            id="small"
            class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            bind:value={user.specialty}
            placeholder="Specialty"
          >
            <option selected value="GL">GL</option>
            <option value="SCI">SCI</option>
            <option value="TI">TI</option>
            <option value="STIC">STIC</option>
          </select>
        </div>
      {/if}
    </div>
    {#if cannot_add_user}
      <p
        class="mb-3 p-5 text-white bg-red-700 text-5xl text-center font-extrabold leading-none tracking-tight dark:text-white"
      >
        Cannot add this user
      </p>
    {/if}
    <div class="w-full flex justify-evenly">
      <button
        type="button"
        class="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 transform active:scale-75 transition-transform"
        on:click={() => {}}
      >
        <Icon class="w-5 h-5 mr-2 -ml-1" icon="mdi:clear" />
        Clear
      </button>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transform active:scale-75 transition-transform"
        on:click={submit}
      >
        Validate
        <Icon class="w-5 h-5 ml-2 -mr-1" icon="carbon:add-filled" />
      </button>
    </div>
  </div>
{/if}
