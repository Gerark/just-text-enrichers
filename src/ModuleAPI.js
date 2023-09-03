import { Constants } from "./ModuleUtils.js";
import { ModuleSettings } from "./ModuleSettings.js";
import MacroEnricher from "./MacroEnricher.js";
import { NotificationUtils, ReasonType } from "./NotificationUtils.js";
import ActionSelectorContextMenu from "./view/action-selector/ActionSelectorContextMenu.svelte";

export class ModuleAPI
{
    static get instance()
    {
        return game.modules.get(Constants.ModuleName).api;
    }

    constructor()
    {
        this.configWindow = null;
        this.actionSelectorContextMenu = null;
        this.enrichers = [];
        this._populateEnrichers();
    }

    executeAction(action)
    {
        console.log(action);
    }

    showConfig()
    {
        if (game.user.isGM)
        {
            if (this.configWindow)
            {
                this.configWindow.render();
            }
            else
            {
                // this.configWindow = new ConfigurationWindowApplication().render(true, { focus: true });
            }
        }
        else
        {
            NotificationUtils.notify(ReasonType.ConfigNoPermission);
        }
    }

    showActionSelector(event, x, y)
    {
        if (this.actionSelectorContextMenu)
        {
            this.closeActionSelector();
        }

        this.actionSelectorContextMenu = new ActionSelectorContextMenu({
            target: document.body,
            props: {
                x,
                y,
                z: 9000,
                moduleAPI: this
            }
        });
    }

    closeActionSelector()
    {
        if (this.actionSelectorContextMenu)
        {
            this.actionSelectorContextMenu.$destroy();
            this.actionSelectorContextMenu = null;
        }
    }

    closeConfig()
    {
        ModuleSettings.save().then(
            () =>
            {
                this.configWindow?.close();
                this.configWindow = null;
            }
        );
    }

    _populateEnrichers()
    {
        const macroEnricher = MacroEnricher.create();
        CONFIG.TextEditor.enrichers.push(macroEnricher.data);
        this.enrichers.push(macroEnricher);
    }
}