import { locSystem } from "./ModuleUtils.js";

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
        return `Text Enrichers - ${message}`;
    }
}