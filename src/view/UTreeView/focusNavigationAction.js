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
 * @param data
 */
export default function focusNavigation(node, data)
{
    const onKeyDown = (ev) =>
    {
        const keyCode = ev.keyCode;
        const current = document.activeElement;
        if (keyCode !== 38 && keyCode !== 40 && (keyCode !== 39 || current === data.getInputElement()))
        {
            return;
        }

        ev.preventDefault();

        let newIndex;
        const items = [...node.getElementsByClassName('focusable')];
        const currentIndex = items.indexOf(current);

        if (currentIndex === -1)
        {
            newIndex = 0;
        }
        else if (keyCode === 40 || keyCode === 39)
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
    };

    node.addEventListener("keydown", onKeyDown);

    return {
        destroy()
        {
            node.removeEventListener("keydown", onKeyDown);
        }
    };
}