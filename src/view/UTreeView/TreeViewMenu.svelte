<script>
    import TreeView from "./TreeView.svelte";
    import SearchBox from "./SearchBox.svelte";
    import Separator from "./Separator.svelte";
    import { onMount, tick } from "svelte";
    import { derived, writable } from "svelte/store";
    import filterItems from "./ItemFilterer.js";
    import focusNavigation from "./focusNavigationAction.js";

    export let title = "";
    export let itemsStore = null;
    export let theme = "";

    let inputElement;

    const filter = writable("");
    const filteredItems = derived([filter, itemsStore], ([depFilter, depActions]) =>
    {
        if (depFilter === "")
        {
            return depActions;
        }
        return filterItems(depActions, depFilter);
    });

    onMount(async () =>
    {
        await tick();
        focusInputElement();
    });

    function focusInputElement()
    {
        inputElement.focus();
    }
</script>

<div class="just-tree-view-menu" data-theme="{theme}" tabindex="{-1}"
     use:focusNavigation={{ getInputElement: () => inputElement }} role="button">
    <span class="title" data-theme="{theme}">{title}</span>
    <SearchBox placeHolderText="Search" theme="{theme}" bind:inputElement={inputElement}
               bind:value={$filter}></SearchBox>
    <div class="content-bkg" data-theme="{theme}">
        <div class="content" data-theme="{theme}">
            <div class="description" data-theme="{theme}">Expand a Folder to see the available Actions</div>
            <Separator theme="{theme}"></Separator>
            <TreeView items="{$filteredItems}" theme="{theme}" on:leafSelected></TreeView>
        </div>
    </div>
</div>

<style lang="scss">
  .just-tree-view-menu {
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-flow: column;
    background-color: var(--bg-primary-color);
    //border: 2px solid var(--bg-secondary-color);
    gap: 2px;
    height: 100%;
    width: 100%;
    padding: 5px;
    color: var(--text-color);

    .title {
      text-align: left;
      font-size: 18px;
    }

    .just-separator {
      --thickness: 1px;
      --color: var(--scrollbar-color);
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