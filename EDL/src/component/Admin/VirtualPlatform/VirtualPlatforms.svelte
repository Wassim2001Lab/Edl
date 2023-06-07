<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { User } from "../../../libjs/model/User";
  import { onMount } from "svelte";
  import { getUser } from "../../../libjs/apis/admin/accounts";
  import { navigate } from "svelte-navigator";
  import { type VirtualPlatform } from "../../../libjs/model/VirtualPlatform";
  import {
    deleteVirtualPlatform,
    getVirtualPlatforms,
  } from "../../../libjs/apis/admin/virtualPlatform";
  let headers: string[] = ["vice doyen email", "name", "actions"];
  let vp_vds: { vp: VirtualPlatform; vd: User }[] = [];
  onMount(async () => {
    await getVirtualPlatforms(
      (vps) => {
        vps.forEach((vp) =>
          getUser(
            (u) =>
              (vp_vds = [
                ...vp_vds,
                {
                  vp,
                  vd: u,
                },
              ]),
            () => {
              console.log("failed");
              navigate("login");
            },
            vp.vd_id
          )
        );
      },
      () => {
        console.log("failed");
        navigate("login");
      }
    );
    console.log(vp_vds);
  });

  let deleteFunction = (vd_id: number) => {
    deleteVirtualPlatform(
      (vps) => {
        vps.forEach((vp) =>
          getUser(
            (u) =>
              (vp_vds = [
                ...vp_vds,
                {
                  vp,
                  vd: u,
                },
              ]),
            () => {
              console.log("failed");
              navigate("login");
            },
            vp.vd_id
          )
        );
      },
      () => console.log("fail"),
      vd_id
    );
  };
</script>

<div class="w-full h-full">
  <div class="pt-5 pb-5 text-center">
    <button
      class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 transform active:scale-75 transition-transform"
      on:click={async () => {
        await navigate("/admin/virtplat/add");
      }}
    >
      <Icon icon="ic:baseline-add" />
    </button>
  </div>
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
      {#each vp_vds as v}
        <tr
          class="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">
            {v.vd.email}
          </td>
          <td class="px-6 py-4">
            {v.vp.name}
          </td>
          <td
            class=" px-6 py-4 flex flex-row justify-center content-center space-x-5"
          >
            <button
              class="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500 transform active:scale-75 transition-transform"
              on:click={async () => await deleteFunction(v.vp.vd_id)}
            >
              <Icon class="w-5 h-5 mr-2 -ml-1" icon="ic:baseline-delete" />
              Delete
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
