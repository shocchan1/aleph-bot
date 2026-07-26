const { Collection } = require("discord.js");
const fs = require('fs');
const path = require('path');

// @ts-check
function modalLoader(modalPath) {
    const modals = new Collection();

    const files = fs.readdirSync(modalPath, { withFileTypes: true });

    for (const item of files) {
        const js = path.join(modalPath, item.name);

        if (path.extname(item.name) !== '.js') continue;

        try {
            const truePath = path.resolve(js);
            const modal = require(truePath);

            if ('customId' in modal && 'execute' in modal) {
                modals.set(modal.customId, modal);
            } else {
                console.warn('[MODAL HANDLER] Some files doesn\'t have "customId" or "execute" property.');
            }
        } catch (error) {
            console.warn('[MODAL HANDLER] Failed to load modals.');
            console.error(error);
        }
    }
}