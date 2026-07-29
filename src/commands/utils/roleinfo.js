// @ts-check
const { SlashCommandBuilder, ActionRowBuilder, RoleSelectMenuBuilder } = require('discord.js');

module.exports = {
    name: 'roleinfo',
    data: new SlashCommandBuilder()
        .setName('roleinfo')
        .setDescription('Get role information of this server'),

    async execute(interaction) {
        const roleMenu = new RoleSelectMenuBuilder()
            .setCustomId('roleinfo_role')
            .setMinValues(1)
            .setMaxValues(1)
            .setPlaceholder('Select a role')
            .setRequired(true);

        const row = new ActionRowBuilder().addComponents(roleMenu);

        return interaction.reply({ content: 'Select a role to get its information.', components: [row] });
    }
}