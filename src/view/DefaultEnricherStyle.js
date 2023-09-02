import { locEnricher } from "../ModuleUtils.js";

export const Constants = {
    className: "just-text-enricher",
    configClassName: "just-text-enricher-config",
    actionClassName: "just-text-enricher-action",
};

/**
 *
 * @param label
 *
 * @param icon
 *
 * @param args
 */
export function getHTML(label, icon, args)
{
    const selectActionText = locEnricher("selectAction.text");
    icon = (icon !== undefined) ? icon : "fa fa-code";
    const html =
    `
        <span class="fa fa-gear ${Constants.configClassName}"></span>
        <span class="${Constants.className}-label">${selectActionText}</span>
    `;
    /*
`
<span class="fa fa-gear ${Constants.configClassName}"></span>
<span class="${icon} ${Constants.className}-icon"></span>
<span class="${Constants.className}-label">${label}</span>
`;
*/

    const div = document.createElement("span");
    div.draggable = true;
    div.innerHTML = html;
    div.classList.add(Constants.className);
    div.classList.add(Constants.configClassName);
    div.dataset["arguments"] = args;
    return div;
}