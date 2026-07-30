require('dotenv').config();
const client = require('./client');
const { loadCommands } = require('./handlers/cmdHandler');
const { eventsLoader } = require('./handlers/eventHandler');
const { buttonLoader } = require('./handlers/buttonLoader');
const { modalLoader } = require('./handlers/modalHandler');
const { menuLoader } = require('./handlers/menuLoader');
const { connectDatabase } = require('./database/connection');

(async () => {
    try {
        if (!process.env.TOKENLOGIN || !process.env.MONGO_URI) return console.log('Void or undefined token');

        client.commands = loadCommands('./src/commands');
        client.buttons = buttonLoader('./src/components/buttons');
        client.modals = modalLoader('./src/components/modals');
        client.menus =  menuLoader('./src/components/menus');
        
        eventsLoader('./src/events', client);

        await connectDatabase();

        await client.login(process.env.TOKENLOGIN);
    } catch (error) {
        console.warn('[INDEX] Failed to start the application.');
        console.error(error);
        process.exit(1);
    }
})();