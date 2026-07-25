const { Events, MessageFlags } = require('discord.js');
const client = require('../client');

module.exports = {
    name: Events.InteractionCreate,
    once: false,

    async execute(interaction) {
        if (interaction.isButton()) {
            switch (interaction.customId) {
                case 'refresh_ping':
                    await interaction.update({ content: `${interaction.client.ws.ping}ms`, });
                    break;

                case 'ping':
                    await interaction.update({ content: 'Pong!' });
                    break;

                case 'delete_ping':
                    await interaction.message.delete();
                    break;

                default:
                    console.warn(`[INTERACTION] Unknown Button: ${interaction.customId}`);
            }
            return;
        }

        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if (!command) return console.warn(`[INTERACTION] No command found for ${interaction.commandName}.`);

        try {
            await command.execute(interaction);
            console.log(`[INTERACTION] ${interaction.commandName} executed by ${interaction.member.displayName || interaction.user.username}`)
        } catch (error) {
            console.log(`[INTERACTION] Failed to execute modules.`);
            console.error(error);
        }
    }
}