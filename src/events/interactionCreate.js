const { Events, MessageFlags } = require('discord.js');
const client = require('../client');

module.exports = {
    name: Events.InteractionCreate,
    once: false,

    async execute(interaction) {
        if (interaction.isButton()) {
            switch (interaction.customId) {
                case 'refresh_ping':
                    await interaction.editReply({ content: `${interaction.client.ws.ping}ms`, flags: MessageFlags.Ephemeral });
                    break;

                case 'ping':
                    await interaction.editReply({ content: 'Pong!', flags: MessageFlags.Ephemeral });
                    break;

                case 'delete_ping':
                    await interaction.message.delete();
                    break;
            }
        }
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if (!command) return console.warn(`[INTERACTION] No command found for ${interaction.commandName}.`);

        try {
            await command.execute(interaction);
            console.log(`[INTERACTION] ${interaction.commandName} executed by ${interaction.user.displayName || interaction.user.tag}`)
        } catch (error) {
            console.log(`[INTERACTION] Failed to execute modules.`);
            console.error(error);
        }
    }
}