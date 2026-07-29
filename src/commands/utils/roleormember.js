// @ts-check
const { SlashCommandBuilder, ActionRowBuilder, MentionableSelectMenuBuilder } = require('discord.js');

module.exports = {
    name: 'roleormember',
    data: new SlashCommandBuilder()
        .setName('roleormember')
        .setDescription('Get role or member information'),

    async execute (interaction) {
        const rolememberMenu = new MentionableSelectMenuBuilder()
            .setCustomId('rolememberinfo_menu')
            .setMinValues(1)
            .setMaxValues(1)
            .setPlaceholder('Select a role or member...')
            .setRequired(true);

        const row = new ActionRowBuilder().addComponents(rolememberMenu);

        return interaction.reply({ content: 'Select a role or member below to get their information.', componentns: [row] });
    }
}