import type { ComponentType, SvelteComponent } from "svelte";

export type SideBarItem = {
  link: string;
  path: string;
  icon: string;
  text: string;
  active: boolean;
  component: ComponentType;
};
