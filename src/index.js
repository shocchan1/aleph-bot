require('dotenv').config();
const client = require('./client');
const { loadCommands } = require('./handlers/cmdHandler');
const { eventsLoader } = require('./handlers/eventHandler');
const { buttonLoader } = require('./handlers/buttonLoader');
const { modalLoader } = require('./handlers/modalHandler');
const { menuLoader } = require('./handlers/menuLoader');

client.commands = loadCommands('./src/commands');
eventsLoader('./src/events', client);
client.buttons = buttonLoader('./src/components/buttons');
client.modals = modalLoader('./src/components/modals');
client.menus =  menuLoader('./src/components/menus');

if (!process.env.TOKENLOGIN) return console.log('Void or undefined token');
client.login(process.env.TOKENLOGIN);