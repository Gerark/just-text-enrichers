import { NotificationUtils } from "./NotificationUtils.js";
import { getHTML, Constants } from "./view/DefaultEnricherStyle.js";
import { ModuleAPI } from "./ModuleAPI.js";
import { TJSContextMenu } from "@typhonjs-fvtt/svelte-standard/application";
import SimpleButton from "./view/SimpleButton.svelte";

export default class MacroEnricher
{
    constructor()
    {
        this.data = {
            id: 'JustTextEnricher.Macro',
            pattern: new RegExp(`@>`, 'g'), // `@>\\[([^\\]]+)]{([^}]+)}(?:{([^}]+)})?`, 'g'),
            // eslint-disable-next-line no-unused-vars
            enricher: (match, { async = false, relativeTo } = {}) => this.enrich(match)
        };

        Hooks.on("renderJournalPageSheet", (sheet, html, data) => { this._registerEvents(html); });
    }

    _registerEvents(html)
    {
        $(`span.${Constants.actionClassName}`, html).click(async (event) =>
        {
            await this._onClick(event.currentTarget.dataset);
        });
        $(`span.${Constants.configClassName}`, html).each((a, b) =>
        {
            b.addEventListener('click', async (event) =>
            {
                event.stopPropagation();
                await this._onClickConfig(event, event.currentTarget.dataset);
            });
        });
    }

    static create()
    {
        return new MacroEnricher();
    }

    enrich(match)
    {
        return getHTML(match[2], match[3], match[1]);
    }

    async _onClickConfig(event, data)
    {
        ModuleAPI.instance.showActionSelector(event.clientX, event.clientY);
        /* TJSContextMenu.create({
id: 'better-macros-directory-context-menu',
items: [{ label: "HELLO", image: "" }, { label: "HELLO 2", image: "" }],
event
});*/
        /* new SimpleButton({
target: event.currentTarget
});*/
    }

    async _onClick(data)
    {
        const args = data["arguments"].split(',').map((item) =>
        {
            return item.trim();
        });
        let macro = await fromUuidSync(args[0]);
        if (!macro)
        {
            macro = await game.macros.getName(args[0]);
        }
        if (macro)
        {
            if (macro instanceof Promise)
            {
                return macro.then(this._handleMacro);
            }
            else
            {
                return this._handleMacro(macro);
            }
        }
        else
        {
            NotificationUtils.error(`Can't find macro: ${args[0]}`);
        }
    }

    async _handleMacro(macro)
    {
        try
        {
            await eval(macro.command);
        }
        catch (err)
        {
            NotificationUtils.error(`There was an error in your macro syntax. See the console (F12) for details`);
            console.error(err);
        }
    }
}