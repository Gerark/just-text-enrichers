<script>
    import ActionSelector from "./ActionSelector.svelte";
    import { clickOutside } from "../utils/ClickOutsideAction.js";
    import TreeViewMenu from "../UTreeView/TreeViewMenu.svelte";
    import { writable } from "svelte/store";

    export let moduleAPI;
    export let x;
    export let y;
    export let z;

    function close()
    {
        moduleAPI.closeActionSelector();
    }

    function onKeyDown(ev)
    {
        if (ev.keyCode === 27)
        {
            close();
        }
    }

    function onActionSelected(ev)
    {
        moduleAPI.executeAction(ev.detail);
        close();
    }

    function contextMenuPosition(node)
    {
        const expandUp = y + node.clientHeight > document.body.clientHeight;
        const expandLeft = x + node.clientWidth > document.body.clientWidth;

        node.style.top = expandUp ? null : `${y}px`;
        node.style.bottom = expandUp ? `${document.body.clientHeight - y}px` : null;

        node.style.left = expandLeft ? null : `${x}px`;
        node.style.right = expandLeft ? `${document.body.clientWidth - x}px` : null;
    }
</script>

<div class="main" use:clickOutside={{callback: close}} use:contextMenuPosition on:keydown={onKeyDown} tabindex="-1"
     role="button" style:z-index={z}>
    <ActionSelector on:actionSelected={onActionSelected}></ActionSelector>
</div>

<style lang="scss">
  .main {
    position: fixed;
    height: 410px;
    width: 410px;
    padding: 0;
    margin: 0;
  }
</style>