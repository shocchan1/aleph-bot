// @ts-check//
require('dotenv').config();
const { REST,  Routes } = require('discord.js');
const { loadCommands } = require('./cmdHandler');

const commands = loadCommands('./src/commands');
const rest = new REST().setToken(process.env.TOKENLOGIN);

(async () => {
    try {
        console.log(`[DEPLOY] Registering ${commands.size} slash commands`);

        const body = commands.map((command) => {
            return command.data.toJSON();
        });

        for (const command of commands.values()) {
            console.log(`[DEPLOY] Registering /${command.data.name}.`);
        }

        await rest.put(
            Routes.applicationGuildCommands(process.env.BOTID, process.env.GUILDID),
            { body }
        );
        
        console.log(`[DEPLOY] Successfully registering ${commands.size} slash commands.`);
    } catch (error) {
        console.log('[DEPLOY] Failed to register slash commands.');
        console.error(error);
    }
})();