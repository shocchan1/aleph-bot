// @ts-check
const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'admin-dashboard',
    data: new SlashCommandBuilder()
        .setName('admin-dashboard')
        .setDescription('Get full information about the server, roles, members, and channels.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const menu = new StringSelectMenuBuilder()
            .setCustomId('admin_menu')
            .setPlaceholder('Select a category...')
            .setMinValues(1)
            .setMaxValues(1)
            .setRequired(true);

        const row = new ActionRowBuilder().addComponents(menu);

        return interaction.reply({ content: 'Select a command category to get the context information you need below.', components: [row] });
    }
}