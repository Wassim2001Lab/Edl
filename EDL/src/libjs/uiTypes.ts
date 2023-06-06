import type { ComponentType, SvelteComponent } from "svelte";

export type SideBarItem = {
  link: string;
  icon: string;
  text: string;
  active: boolean;
};

export type Page = {
  path: string;
  component: ComponentType;
};
