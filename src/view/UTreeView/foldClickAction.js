/**
 *
 * @param node
 *
 * @param root0
 *
 * @param root0."0"
 *
 * @param root0."1"
 *
 * @param root0."2"
 */
export default function foldClick(node, [clickState, neededClick, callback])
{
    if (clickState.count === undefined || clickState.timer === undefined)
    {
        clickState.count = 0;
        clickState.timer = null;
    }
    const onClick = (e) =>
    {
        clickState.count++;
        if (neededClick === clickState.count)
        {
            clearTimeout(clickState.timer);
            clickState.count = 0;
            callback();
        }
        else if (clickState.count === 1)
        {
            clickState.timer = setTimeout(() =>
            {
                clickState.count = 0;
            }, 400);
        }
        e.stopPropagation();
    };

    node.addEventListener("click", onClick);

    return {
        destroy()
        {
            node.removeEventListener("click", onClick);
        }
    };
}