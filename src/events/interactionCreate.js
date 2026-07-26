const { Events, MessageFlags } = require('discord.js');
const client = require('../client');

module.exports = {
    name: Events.InteractionCreate,
    once: false,

    async execute(interaction) {
        if(interaction.isModalSubmit()) {
            const modal = client.modals.get(interaction.customId);
            if (!modal) return console.warn(`[INTERACTION] No modal found for ${interaction.customId}`);

            try {
                await modal.execute(interaction);
                console.log(`[INTERACTION] ${interaction.member.displayName || interaction.user.tag} given ${interaction.customId} modal submit.`);
            } catch (error) {
                console.warn('[INTERACTION] Failed to execute modal components.');
                console.error(error);
            }
        }
        
        if (interaction.isButton()) {
            const button = client.buttons.get(interaction.customId);
            if (!button) return console.warn(`[INTERACTION] No button found for ${interaction.customId}.`);

            try {
                await button.execute(interaction);
                console.log(`[INTERACTION] ${interaction.customId} button executed by ${interaction.member.displayName || interaction.user.username}.`);
            } catch (error) {
                console.warn('[INTERACTION] Failed to execute button components.');
                console.error(error);
            }
        }

        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if (!command) return console.warn(`[INTERACTION] No command found for ${interaction.commandName}.`);

        try {
            await command.execute(interaction);
            console.log(`[INTERACTION] ${interaction.commandName} executed by ${interaction.member.displayName || interaction.user.username}`)
        } catch (error) {
            console.warn(`[INTERACTION] Failed to execute modules.`);
            console.error(error);
        }
    }
}