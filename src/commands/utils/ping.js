// @ts-check
const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    name: 'ping',
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Reply with pong!'),

    async execute(interaction) {
        return interaction.reply({ content: 'Pong!~', flags: MessageFlags.Ephemeral });
    }
}