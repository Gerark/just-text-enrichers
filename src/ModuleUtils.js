export const Constants = {
    ModuleName: "just-text-enrichers",
    ModuleTextName: "Just Text Enrichers",
    ModuleTextNameAcronym: "JTE",
    Options: {}
};

export const ReasonType = {
    None: -1,
    ConfigNoPermission: 0,
};

export class NotificationUtils
{
    static notify(reason)
    {
        switch (reason)
        {
        case ReasonType.ConfigNoPermission:
            this.warning(locSystem(`ConfigNoPermission`));
            break;
        }
    }

    static error(message)
    {
        ui.notifications.error(this._moduleMessage(message));
    }

    static warning(message)
    {
        ui.notifications.warn(this._moduleMessage(message));
    }

    static errorPromise(message)
    {
        return new Promise(() =>
        {
            throw new Error(message);
        });
    }

    static _moduleMessage(message)
    {
        return `Popcorn Initiative - ${message}`;
    }
}

export class ModuleUtils
{
    static async installMacro(name, code, icon)
    {
        let existingFolder = game.folders.contents.find((f) => f.name === Constants.ModuleTextName);
        if (!existingFolder)
        {
            existingFolder = await Folder.create({
                name: Constants.ModuleTextName,
                type: "Macro"
            }, {});
        }

        const macroData = {
            name: `${Constants.ModuleTextNameAcronym} - ${name}`,
            type: "script",
            command: code,
            img: icon,
            folder: existingFolder
        };

        const existingMacro = game.macros.contents.find((m) => m.name === `${Constants.ModuleTextNameAcronym} - ${name}`);
        if (!existingMacro)
        {
            await Macro.create(macroData, {});
        }

    }

    static isMacroInstalled(name)
    {
        return game.macros.contents.find((m) => m.name === `${Constants.ModuleTextNameAcronym} - ${name}`);
    }
}

/**
 *
 * @param localizationKey
 */
export function locSystem(localizationKey)
{
    return localize(`SystemMessage.${localizationKey}`);
}

/**
 *
 * @param localizationKey
 */
export function locSettings(localizationKey)
{
    return localize(`Settings.${localizationKey}`);
}

/**
 *
 * @param localizationKey
 */
function localize(localizationKey)
{
    return game.i18n.localize(`JPI.${localizationKey}`);
}
