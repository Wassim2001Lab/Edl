<script lang="ts">
  import type { Page, SideBarItem } from "../../libjs/uiTypes";
  import Main from "../general/User/Main.svelte";
  import AddUserForm from "./AddUserForm.svelte";
  import UserTable from "./UserTable.svelte";
  import VirtualPlatforms from "./VirtualPlatforms.svelte";
  let userRole = "Administrator";
  let navBar: SideBarItem[] = [
    // { icon: "bxs-dashboard", link: "#", text: "Dashboard", active: true , component:<div},
    {
      icon: "bxs-user",
      link: "/admin/users",
      text: "Accounts",
      active: false,
    },
    {
      icon: "bxs-school",
      link: "/admin/virtplat",
      text: "Platforms",
      active: false,
    },
  ];
  let pages: Page[] = [
    {
      path: "/users",
      component: UserTable,
    },
    {
      path: "/virtplat",
      component: VirtualPlatforms,
    },
    {
      path: "/users/add",
      component: AddUserForm,
    },
  ];
</script>

<Main {pages} {navBar} {userRole} />
