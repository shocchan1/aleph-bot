// @ts-check
const { SlashCommandBuilder, ActionRowBuilder, UserSelectMenuBuilder } = require('discord.js');

module.exports = {
    name: 'profile',
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Get a member profile information'),

    async execute(interaction) {
        const userMenu = new UserSelectMenuBuilder()
            .setCustomId('profile_user')
            .setMinValues(1)
            .setMaxValues(1)
            .setPlaceholder('Select a member')
            .setRequired(true);

        const row = new ActionRowBuilder().addComponents(userMenu);

        return interaction.reply({ content: 'Select a member to get their profile information.', components: [userMenu] });
    }
}