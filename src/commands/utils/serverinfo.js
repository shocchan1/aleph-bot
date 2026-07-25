// @ts-check
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Get server information'),

    async execute(interaction) {
        const guild = interaction.guild;
        const user = interaction.user || interaction.member;

        const embed = new EmbedBuilder()
            .setTitle('**SERVER INFORMATION**')
            .setColor('DarkOrange')
            .setFields(
                { name: 'Name:', value: `${guild.name} (${guild.id})` },
                { name: 'Owner:', value: `<@${guild.ownerId}>` },
                { name: 'Members:', value: guild.memberCount.toString() },
                { name: 'Created At:', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>` }
            )
            .setFooter({ text: `Requested by ${user.tag}`, iconURL: user.displayAvatarURL() })
            .setTimestamp();

        const banner = guild.bannerURL({ dynamic: true, size: 1024 });
        if (banner) {
            embed.setImage(banner)
        }

        const icon = guild.iconURL({ dynamic: true, size: 256 });
        if (icon) {
            embed.setThumbnail(icon);
        }

        return interaction.reply({ embeds: [embed] });
    }
}