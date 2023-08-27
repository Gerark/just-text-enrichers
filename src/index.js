import { ModuleAPI } from './ModuleAPI.js';
import { ModuleSettings } from './ModuleSettings.js';
import { Constants } from "./ModuleUtils.js";

Hooks.once('ready', () =>
{
    const module = game.modules.get(Constants.ModuleName);
    module.api = new ModuleAPI();
    ModuleSettings.initialize();
});