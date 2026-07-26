const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");
const { botUptime } = require('../../utils/botUptimeFormat');

// @ts-check
module.exports = {
    customId: 'back_ping',

    async execute(interaction) {
        const bot = interaction.client;
        const user = interaction.user;

        const embed = new EmbedBuilder()
            .setColor('DarkOrange')
            .setDescription(`**Ping-pong!~ I'm still standing here.**\n\nPing: ${bot.ws.ping}ms\nUptime: ${botUptime(bot.uptime)}`)
            .setThumbnail((await bot.user.fetch()).displayAvatarURL({ dynamic: true, size: 256 }))
            .setFooter({ text: `Requested by ${user.tag}`, iconURL: user.displayAvatarURL() })
            .setTimestamp();

        const button = new ButtonBuilder()
            .setCustomId('refresh_ping')
            .setLabel('REFRESH')
            .setStyle(ButtonStyle.Primary);
        
        const button1 = new ButtonBuilder()
            .setCustomId('pingb')
            .setLabel('PING')
            .setStyle(ButtonStyle.Secondary);

        const button2 = new ButtonBuilder()
            .setCustomId('delete_ping')
            .setLabel('DELETE')
            .setStyle(ButtonStyle.Danger);

        const row = new ActionRowBuilder().addComponents(button, button1, button2);

        await interaction.update({ content: 'Pong!~', embeds: [embed], components: [row] });
    }
}