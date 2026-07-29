// @ts-check
const { SlashCommandBuilder, ActionRowBuilder, ChannelSelectMenuBuilder } = require('discord.js');

module.exports = {
    name: 'channelinfo',
    data: new SlashCommandBuilder()
        .setName('channeinfo')
        .setDescription('Get channel information'),

    async execute(interaction) {
        const channelMenu = new ChannelSelectMenuBuilder()
            .setCustomId('channelinfo_menu')
            .setMinValues(1)
            .setMaxValues(1)
            .setRequired(true)
            .setPlaceholder('Select a channel');

        const row = new ActionRowBuilder().addComponents(channelMenu);

        return interaction.reply({ content: 'Select a channel below.', components: [row] });
    }
}