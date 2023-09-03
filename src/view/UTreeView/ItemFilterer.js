import fuzzysort from "fuzzysort";

/**
 *
 * @param items
 *
 * @param filter
 */
export default function filterItems(items, filter)
{
    const filteredTree = [];
    items.forEach((item) =>
    {
        const [result, tree] = filterNode(item, filter, false);
        if (result)
        {
            filteredTree.push(tree);
        }
    });

    return filteredTree;
}

/**
 *
 * @param node
 *
 * @param filter
 *
 * @param parentResult
 */
function filterNode(node, filter, parentResult)
{
    const root = {
        label: node.label,
        isOpen: true,
        items: [],
        id: node.id,
        description: node.description,
        payload: node.payload,
        icon: node.icon
    };
    const result = fuzzysort.single(filter, node.label);
    let rootResult = result && result.score >= -1000;
    if (rootResult)
    {
        root.label = fuzzysort.highlight(result, open = '<span class="highlightedLabel"><b>', close =
            '</b></span>');
    }
    rootResult |= parentResult;
    let childResult = false;

    if (node.items)
    {
        node.items.forEach((item) =>
        {
            const [itemResult, itemTree] = filterNode(item, filter, rootResult);

            if (itemResult || rootResult)
            {
                root.items.push(itemTree);
            }

            childResult |= itemResult;
        });
    }

    return [rootResult || childResult, root];
}