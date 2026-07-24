const { Events } = require('discord.js');
const client = require('../client');

module.exports = {
    name: Events.InteractionCreate,
    once: false,

    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if (!command) return console.warn(`No command found for ${interaction.commandName}.`);

        try {
            await command.execute(interaction);
        } catch (error) {
            console.log(`[INTERACTION] Failed to execute modules.`);
            console.error(error);
        }
    }
}