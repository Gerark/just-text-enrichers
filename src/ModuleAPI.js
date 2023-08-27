import { NotificationUtils, ModuleUtils, ReasonType, Constants } from "./ModuleUtils.js";
import { ModuleSettings } from "./ModuleSettings.js";
import ConfigurationWindowApplication from "./view/configuration-window/ConfigurationWindowApplication.js";

export class ModuleAPI
{
    static get instance()
    {
        return game.modules.get(Constants.ModuleName).api;
    }

    constructor()
    {
        this.configWindow = null;
    }

    async installCommonMacros()
    {
        await ModuleUtils.installMacro(
            `Open Configuration`,
            `game.modules.get("just-popcorn-initiative").api.showConfig();`,
            `icons/svg/dice-target.svg`);
        await ModuleUtils.installMacro(
            `Open Selection Window`,
            `game.modules.get("just-popcorn-initiative").api.showSelectionWindowOrPassTurn();`,
            `icons/svg/dice-target.svg`);
    }

    areCommonMacrosInstalled()
    {
        return ModuleUtils.isMacroInstalled("Open Configuration") && ModuleUtils.isMacroInstalled("Open Selection Window");
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
}