// @ts-check
const { SlashCommandBuilder, EmbedBuilder, version } = require('discord.js');
const client = require('../../client');

module.exports = {
    name: 'botinfo',
    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Get information of this bot'),

    async execute(interaction) {
        const bot = await interaction.client;
        const user = interaction.user || interaction.member;

        const embed = new EmbedBuilder()
            .setTitle('**BOT INFORMATION**')
            .setColor('DarkOrange')
            .setDescription(`This bot used Discord.js v${version} & ${process.version}`)
            .setFields(
                { name: 'Name:', value: bot.user.displayName.toString() || bot.user.globalName.toString() },
                { name: 'Ping:', value: `${client.ws.ping}ms` },
                { name: 'Uptime:', value: botUptime(bot.uptime) }
            )
            .setFooter({ text: `Requested by ${user.tag}`, iconURL: user.displayAvatarURL() })
            .setTimestamp();

        const pfp = bot.user.displayAvatarURL({ dynamic: true, size: 256 });
        const banner = (await bot.user.fetch()).bannerURL({ dynamic: true, size: 1024 })
        if (pfp) {
            embed.setThumbnail(pfp);
        }
        if (banner) {
            embed.setImage(banner);
        }

        return interaction.reply({ embeds: [embed] });
    }
}