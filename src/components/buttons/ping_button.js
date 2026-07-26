const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");

// @ts-check
module.exports = {
    customId: 'pingb',

    async execute(interaction) {
        const bot = interaction.client;
        const user = interaction.user || interaction.member;

        const embed = new EmbedBuilder()
            .setDescription('# **PONG!~**')
            .setColor('DarkOrange')
            .setFooter({ text: `Requested by ${user.tag}`, iconURL: user.displayAvatarURL() })
            .setTimestamp();

        const button = new ButtonBuilder()
            .setCustomId('back_ping')
            .setLabel('Back')
            .setStyle(ButtonStyle.Secondary);

        const row = new ActionRowBuilder().addComponents(button);

        await interaction.update({ embeds: [embed], components: [row] });
    }
}