<script lang="ts">
  import type { SideBarItem } from "../../libjs/uiTypes";
  import Main from "../general/User/Main.svelte";
  import UserTable from "./UserTable.svelte";
  import VirtualPlatforms from "./VirtualPlatforms.svelte";
  let userRole = "Administrator";
  let navBar: SideBarItem[] = [
    // { icon: "bxs-dashboard", link: "#", text: "Dashboard", active: true , component:<div},
    {
      icon: "bxs-user",
      link: "/admin/users",
      path: "/users",
      text: "Accounts",
      active: false,
      component: UserTable,
    },
    {
      icon: "bxs-school",
      link: "/admin/virtplat",
      path: "/virtplat",
      text: "Platforms",
      active: false,
      component: VirtualPlatforms,
    },
  ];
</script>

<Main {navBar} {userRole} />
