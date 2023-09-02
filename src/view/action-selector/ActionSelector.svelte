<script>
   import { EmptyApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
   import { getContext } from "svelte";
   import { clickOutside } from "../ClickOutsideAction.js";
   import TreeContextMenu from "./TreeContextMenu.svelte";
   import { filteredActions, actionFilter } from "../../ModuleStore.js";
   import { onMount } from "svelte";

   export let elementRoot;

   const { moduleAPI } = getContext('#external');

   function close()
   {
      moduleAPI.closeActionSelector();
   }

   function actionSelected(event)
   {
      moduleAPI.executeAction(event.detail);
      close();
   }

   onMount(() =>
   {
      function fold(action)
      {
         action.isOpen = false;
         if (action.items)
         {
            action.items.forEach((x) =>
            {
               fold(x);
            });
         }
      }

      $filteredActions.forEach((action) =>
      {
         fold(action);
      });
   });

</script>

<svelte:options accessors={true}/>

<EmptyApplicationShell bind:elementRoot>
   <div use:clickOutside={{callback: close}} class="main">
      <TreeContextMenu title="All Actions"
                       items="{$filteredActions}"
                       bind:filter="{$actionFilter}"
                       on:leafSelected={actionSelected}></TreeContextMenu>
   </div>
</EmptyApplicationShell>

<style lang="scss">
   .main {
      height: 100%;
   }

   :global(.just-tree-context-menu) {
      --bg-primary-color: #{$bg-color-primary};
      --bg-secondary-color: #{$bg-color-secondary};
      --bg-ternary-color: #{$bg-color-ternary};
      --text-color: #{$primary-color};
      --active-color: #{$active-color};
      --scrollbar-color: #{$scrollbar-color};
      --active-scrollbar-color: #{$active-scrollbar-color};
      --arrow-color: #{$scrollbar-color};
      --arrow-active-color: #{$active-scrollbar-color};
      --leaf-color: #{$icon-color};
      --item-hover-color: #{$item-hover-color};
      --folder-label-color: #{$secondary-color};

      :global(.just-separator) {
         --thickness: 1px;
         --color: #{$scrollbar-color};
      }
   }
</style>