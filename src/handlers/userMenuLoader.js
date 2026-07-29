// @ts-check
const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

function userLoader(menuPath) {
    const userMenus = new Collection();
    const files = fs.readdirSync(menuPath, { withFileTypes: true });

    for (const item of files) {
        const itemPath = path.join(menuPath, item.name);
        if (path.extname(item.name) !== '.js') continue;
        const truePath = path.resolve(itemPath);

        try {
            const userMenu = require(truePath);

            if ('customId' in userMenu && 'execute' in userMenu) {
                userMenus.set(userMenu.customId, userMenu);
            } else {
                console.warn('[USER HANDLER] Some files doesn\'t have "customId" or "execute" property.');
            }
        } catch (error) {
            console.warn('[USER HANDLER] Failed to load user menu.');
            console.error(error);
        }
    }

    return userMenus;
}

module.exports = { userLoader };