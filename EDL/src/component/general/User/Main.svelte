<script lang="ts">
  import SideBar from "./SideBar.svelte";
  import NavBar from "./NavBar.svelte";
  import Content from "./Content.svelte";
  import { Route, Router } from "svelte-navigator";
  import type { Page, SideBarItem } from "../../../libjs/uiTypes";
  let hide = false;
  export let userRole: string;
  export let navBar: SideBarItem[];
  export let pages: Page[];
</script>

<NavBar hidebutton={() => (hide = !hide)} {hide} />
<SideBar {userRole} {hide} values={navBar} />
<Content {hide}>
  <div class="w-full h-full my-gray content-center">
    <div class="m-14 bg-inherit">
      <Router>
        {#each pages as item}
          <Route path={item.path} let:params>
            <svelte:component this={item.component} {...params} />
          </Route>
        {/each}
      </Router>
    </div>
  </div>
</Content>
