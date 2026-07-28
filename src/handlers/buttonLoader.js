//@ts-check
const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

function buttonLoader(buttonPath) {
    const buttons = new Collection();
    const buttonsPath = fs.readdirSync(buttonPath, { withFileTypes: true });

    for (const item of buttonsPath) {
        const itemPath = path.join(buttonPath, item.name);

        if (path.extname(item.name) !== '.js') continue;

        const truePath = path.resolve(itemPath);

        try {
            const button = require(truePath);

            if ('customId' in button && 'execute' in button) {
                buttons.set(button.customId, button);
            } else {
                console.warn('[BUTTON HANDLER] Some files doesn\'t have "customId" or "execute" property.');
            }
        } catch (error) {
            console.warn('[BUTTON HANDLER] Failed to load buttons.');
            console.error(error);
        }
    }

    return buttons;
}

module.exports = { buttonLoader };