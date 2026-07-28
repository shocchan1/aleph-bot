// @ts-check
const { StringSelectMenuBuilder, ActionRowBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get help with the bot commands.'),

    async execute(interaction) {
        const helpMenu = new StringSelectMenuBuilder()
            .setCustomId('help_menu')
            .setPlaceholder('Select a command category...')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions(
                { label: 'Utility Commands', description: 'Get help with utility commands.', value: 'utility_menu' },
                { label: 'Moderation Commands', description: 'Get help with moderation commands. Only admins can access to this feature.', value: 'mod_menu' },
                { label: 'Fun Commands', description: 'Get help with fun commands.', value: 'fun_menu' }
            )

        const row = new ActionRowBuilder().addComponents(helpMenu);

        return interaction.reply({ content: 'Please select a command category from the menu below.', components: [row] });
    }
}