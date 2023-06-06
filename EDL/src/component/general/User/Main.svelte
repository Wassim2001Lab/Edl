<script lang="ts">
  import SideBar from "./SideBar.svelte";
  import NavBar from "./NavBar.svelte";
  import Content from "./Content.svelte";
  import FormAdd from "../FormAdd.svelte";
  import Table from "../Table.svelte";
  let hide = false;
  export let userRole: string;
  export let navBar;
</script>

<NavBar hidebutton={() => (hide = !hide)} {hide} />
<SideBar {userRole} {hide} values={navBar} />
<Content {hide}>
  <div class="w-full h-full my-gray content-center">
    <div class="m-14 bg-inherit">
      <FormAdd />
    </div>
  </div>
</Content>
