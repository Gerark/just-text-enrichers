<script>
   import TreeView from "./TreeView.svelte";
   import SearchBox from "../SearchBox.svelte";
   import Separator from "../Separator.svelte";
   import { onMount, tick } from "svelte";

   export let title = "";
   export let items = [];
   export let filter = "";

   let inputElement;
   let treeContextMenu;

   onMount(async () =>
   {
      await tick();
      focusInputElement();
   });

   function focusInputElement()
   {
      inputElement.focus();
   }

   function onKeyDown(ev)
   {
      const keyCode = ev.keyCode;
      if (keyCode !== 38 && keyCode !== 40)
      {
         return;
      }

      ev.preventDefault();

      let newIndex;
      const current = document.activeElement;
      const items = [...treeContextMenu.getElementsByClassName('focusable')];
      const currentIndex = items.indexOf(current);

      if (currentIndex === -1)
      {
         newIndex = 0;
      }
      else if (keyCode === 40)
      {
         newIndex = currentIndex + 1;
      }
      else if (keyCode === 38)
      {
         newIndex = currentIndex - 1;
      }

      newIndex = Math.min(Math.max(newIndex, 0), items.length - 1);
      current.blur();
      items[newIndex].focus();
   }
</script>

<div class="just-tree-context-menu" bind:this={treeContextMenu} tabindex="{-1}" on:keydown={onKeyDown} role="button">
   <span class="title">{title}</span>
   <SearchBox placeHolderText="Search" bind:inputElement={inputElement} bind:value={filter}></SearchBox>
   <div class="content-bkg">
      <div class="content">
         <div class="description">Expand a Folder to see the available Actions</div>
         <Separator></Separator>
         <TreeView items="{items}" on:leafSelected></TreeView>
      </div>
   </div>
</div>

<style lang="scss">
   .just-tree-context-menu {
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-flow: column;
      background-color: var(--bg-primary-color);
      border: 2px solid var(--bg-secondary-color);
      gap: 2px;
      height: 100%;
      width: 100%;
      padding: 5px;
      color: var(--text-color);

      .title {
         text-align: left;
         font-size: 18px;
      }

      .content-bkg {
         background: var(--bg-secondary-color);
         padding: 0 0 0 0;
         height: 100%;
         overflow: auto;
         overscroll-behavior: none;
         scrollbar-gutter: stable;
         box-shadow: inset 0 5px 5px -5px black, inset 0 -5px 5px -5px black;
      }

      .content {
         display: flex;
         flex-flow: column nowrap;
         padding: 5px;
         gap: 8px;
         height: 100%;
         overflow: auto;
         scrollbar-gutter: stable;

         .description {
            padding: 2px;
         }
      }

      .content::-webkit-scrollbar {
         width: 8px;
         border: 0 solid transparent;
         margin: 5px;
      }

      .content::-webkit-scrollbar-track {
         border: 0 solid transparent;
         box-shadow: none;
         margin: 5px;
      }

      .content::-webkit-scrollbar-track:hover {
         border: 0 solid transparent;
         box-shadow: none;
      }

      .content::-webkit-scrollbar-thumb {
         background-color: var(--scrollbar-color);
         border: 0 solid transparent;
         box-shadow: none;
      }

      .content::-webkit-scrollbar-thumb:hover {
         background-color: var(--active-scrollbar-color);
         border: 0 solid transparent;
         box-shadow: none;
      }
   }
</style>