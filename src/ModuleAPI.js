import { Constants } from "./ModuleUtils.js";
import { ModuleSettings } from "./ModuleSettings.js";
import MacroEnricher from "./MacroEnricher.js";
import { actionFilter } from "./ModuleStore.js";
import { NotificationUtils, ReasonType } from "./NotificationUtils.js";
import ConfigurationWindowApplication from "./view/configuration-window/ConfigurationWindowApplication.js";
import ActionSelectorApplication from "./view/action-selector/ActionSelectorWindowApplication.js";

export class ModuleAPI
{
    static get instance()
    {
        return game.modules.get(Constants.ModuleName).api;
    }

    constructor()
    {
        this.closingActionSelector = false;
        this.requestActionSelector = false;
        this.configWindow = null;
        this.actionSelectorWindow = null;
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
                this.configWindow = new ConfigurationWindowApplication().render(true, { focus: true });
            }
        }
        else
        {
            NotificationUtils.notify(ReasonType.ConfigNoPermission);
        }
    }

    showActionSelector(x, y)
    {
        if (this.actionSelectorWindow)
        {
            if (this.closingActionSelector)
            {
                this.requestActionSelector = { x, y };
            }
            else
            {
                this.actionSelectorWindow.render();
            }
        }
        else
        {
            this.requestActionSelector = null;
            this.actionSelectorWindow = new ActionSelectorApplication().render(true, { focus: true, top: y, left: x });
        }
    }

    closeActionSelector()
    {
        this.closingActionSelector = true;
        this.actionSelectorWindow?.close().then(() =>
        {
            actionFilter.set("");
            this.closingActionSelector = false;
            this.actionSelectorWindow = null;
            if (this.requestActionSelector)
            {
                this.showActionSelector(this.requestActionSelector.x, this.requestActionSelector.y);
            }
        }
        );
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