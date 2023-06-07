<script lang="ts">
  import type { Page, SideBarItem } from "../../libjs/uiTypes";
  import Main from "../general/User/Main.svelte";
  import AddUserForm from "./Accounts/AddUserForm.svelte";
  import UserTable from "./Accounts/UserTable.svelte";
  import AddVirtualPlatformForm from "./VirtualPlatform/AddVirtualPlatformForm.svelte";
  import VirtualPlatforms from "./VirtualPlatform/VirtualPlatforms.svelte";
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
    {
      path: "/virtplat/add",
      component: AddVirtualPlatformForm,
    },
  ];
</script>

<Main {pages} {navBar} {userRole} />
