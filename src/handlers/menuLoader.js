// @ts-check
const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

function menuLoader(menuPath) {
    const menuStrings = new Collection();
    const files = fs.readdirSync(menuPath, { withFileTypes: true });

    for (const item of files) {
        const itemPath = path.join(menuPath, item.name);

        if (path.extname(item.name) !== '.js') continue;
        const truePath = path.resolve(itemPath);

        try {
            const menuString = require(truePath);

            if ('customId' in menuString && 'execute' in menuString) {
                menuStrings.set(menuString.customId, menuString);
            } else {
                console.warn('[MENU HANDLER] Some files doesn\'t have "customId" or "execute" property.');
            }
        } catch (error) {
            console.warn('[MENU HANDLER] Failed to load menu for menu strings.');
            console.error(error);
        }
    }

    return menuStrings;
}

module.exports = { menuLoader };