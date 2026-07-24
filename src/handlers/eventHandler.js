// @ts-check//
const fs = require('fs');
const path = require('path');

function eventsLoader(eventsPath, client) {
    const eventPath = fs.readdirSync(eventsPath, { withFileTypes: true });

    for (const item of eventPath) {
        const itemPath = path.join(eventsPath, item.name);
            
        if (path.extname(item.name) !== '.js') continue;

        
        const absolutePath = path.resolve(itemPath);
        const event = require(absolutePath);

        try {
            if ('name' in event && 'execute' in event) {
                if (event.once) {
                    client.once(event.name, (...args) => event.execute(...args));
                } else {
                    client.on(event.name, (...args) => event.execute(...args));
                }
            } else {
                console.warn('[EVENT HANDLER] Invalid event module.\nMissing "name" or "execute".');
            }
        } catch (error) {
            console.log('[EVENT HANDlER] Failed to load events.')
            console.error(error);
        }

        console.log(`[EVENT HANDLER] Loaded ${event.name} event.`);
    }
}

module.exports = { eventsLoader };