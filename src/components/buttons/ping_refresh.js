const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");
const { botUptime } = require('../../utils/botUptimeFormat');

// @ts-check
module.exports = {
    customId: 'refresh_ping',

    async execute(interaction) {
        const bot = interaction.client;
        const user = interaction.user || interaction.member;

        const embed = new EmbedBuilder()
            .setDescription('# **THANK YOU FOR CHECKING ME**\n\nI\'m good so don\'t worry about it.')
            .setColor('DarkOrange')
            .setFields(
                { name: 'Ping:', value: `${bot.ws.ping}ms` }
            )
            .setFooter({ text: `Requested by ${user.tag}`, iconURL: user.displayAvatarURL() })
            .setTimestamp();

        const button = new ButtonBuilder()
            .setCustomId('back_ping')
            .setLabel('BACK')
            .setStyle(ButtonStyle.Secondary);

        const row = new ActionRowBuilder().addComponents(button);

        await interaction.update({ embeds: [embed], components: [row] });
    }
}