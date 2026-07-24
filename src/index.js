require('dotenv').config();
const client = require('./client');
const { loadCommands } = require('./handlers/cmdHandler');
const { eventsLoader } = require('./handlers/eventHandler');

client.commands = loadCommands('./src/commands');
eventsLoader('./src/events', client);

if (!process.env.TOKENLOGIN) return console.log('Void or undefined token');
client.login(process.env.TOKENLOGIN);