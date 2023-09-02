import { SvelteApplication } from '#runtime/svelte/application';

import ActionSelector from './ActionSelector.svelte';
import { ModuleAPI } from "../../ModuleAPI.js";

export default class ActionSelectorApplication extends SvelteApplication
{
    static get defaultOptions()
    {
        const moduleAPI = ModuleAPI.instance;
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: 'text-enrichers-selector',
            classes: ['tjs-essential-svelte-esm'],
            width: 410,
            height: 410,
            defaultCloseAnimation: false,

            svelte: {
                class: ActionSelector,
                target: document.body,
                context: { moduleAPI }
            }
        });
    }
}