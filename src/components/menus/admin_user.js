// @ts-check
const { UserSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
    customId: 'admin_user_menu',

    async execute(interaction) {
        const userSelect = new UserSelectMenuBuilder()
            .setCustomId('admin_user')
            .setPlaceholder('Select a member...')
            .setMinValues(1)
            .setMaxValues(1)
            .setRequired(true);
            
        const row = new ActionRowBuilder().addComponents(userSelect);

        return interaction.update({ content: 'Select a member below to get their full information', components: [row] });
    }
}