// @ts-check
const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { botUptime } = require('../../utils/botUptimeFormat')

module.exports = {
    name: 'ping',
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Reply with pong!'),

    async execute(interaction) {
        const bot = interaction.client;
        const user = interaction.user || interaction.member;

        const embed = new EmbedBuilder()
            .setTitle('**PONG!**')
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

        return interaction.reply({ content: 'Pong!~', embeds: [embed], components: [row] });
    }
}