import { settings } from "./ModuleStore.js";

export class StoreUpdater
{
    static updateSettings()
    {
        const newSettings = [];
        /*
        newSettings.push({
            name: locSettings(`${Constants.Options.OverrideNextTurnButton}-title`),
            description: locSettings(`${Constants.Options.OverrideNextTurnButton}-description`),
            value: overrideEndTurnButton
        });
        */
        settings.set(newSettings);
    }
}