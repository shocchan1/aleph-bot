// @ts-check
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
    name: 'feedback',
    data: new SlashCommandBuilder()
        .setName('feedback')
        .setDescription('Send feedbacks for me'),

    async execute(interaction) {
        const button = new ButtonBuilder()
            .setCustomId('feedback_button')
            .setLabel('Feedback')
            .setStyle(ButtonStyle.Secondary);

        const row = new ActionRowBuilder().addComponents(button);

        return interaction.reply({ content: 'Press button below to give me feedbacks!', components: [row] });
    }
}