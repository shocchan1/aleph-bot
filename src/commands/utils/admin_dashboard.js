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
            .addOptions(
                { label: 'Members Information', description: 'Get a member information', value: 'admin_user_menu' },
                { label: 'Roles Information', description: 'Get a role information', value: 'admin_role_menu' },
                { label: 'Channels Information', description: 'Get a channel information', value: 'admin_channel_menu' }
            );

        const row = new ActionRowBuilder().addComponents(menu);

        return interaction.reply({ content: 'Select a command category to get the context information you need below.', components: [row] });
    }
}