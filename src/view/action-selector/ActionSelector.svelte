<script>
    import TreeContextMenu from "../UTreeView/TreeViewMenu.svelte";
    import { actions } from "../../ModuleStore.js";
    import { onMount, createEventDispatcher } from "svelte";
    import "../UTreeView/styles/snow-theme.scss";
    import "../UTreeView/styles/u-theme.scss";
    import "../UTreeView/styles/infra-theme.scss";

    let dispatch = createEventDispatcher();

    function actionSelected(event)
    {
        dispatch("actionSelected", event.detail);
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

        $actions.forEach((action) =>
        {
            fold(action);
        });
        $actions = $actions;
    });
</script>

<div class="main">
    <TreeContextMenu title="All Actions"
                     itemsStore="{actions}"
                     on:leafSelected={actionSelected}
                     theme="u"></TreeContextMenu>
</div>

<style lang="scss">
  .main {
    height: 100%;
  }
</style>