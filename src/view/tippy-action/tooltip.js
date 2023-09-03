import tippy from "tippy.js";

/**
 *
 * @param node
 *
 * @param params
 */
export function tooltip(node, params)
{
    if (!tippy)
    {
        return;
    }

    const tip = tippy(node, { ...params });

    return {
        update: (newParams) =>
        {
            console.log(newParams);
            tip.setProps({ ...newParams });
        },
        destroy: () => tip.destroy()
    };
}