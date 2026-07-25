// @ts-check
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'userinfo',
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Get the user info')
        .addUserOption(opt =>
            opt.setName('target')
                .setDescription('Pick a target')
                .setRequired(false)
        ),

    async execute(interaction) {
        const userTarget = interaction.options.getMember('target') || interaction.member;
        const interactor = interaction.user;

        const embed = new EmbedBuilder()
            .setTitle('**USER INFORMATION**')
            .setColor('DarkOrange')
            .setFields(
                { name: 'Nickname:', value: `${userTarget.displayName || 'User doesn\'t have nickname'}` },
                { name: 'Username:', value: `${userTarget.tag}` },
                { name: 'Account ID:', value: `${userTarget.id}` }
            )
            .setImage(userTarget.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setFooter({ text: `Requested by ${interactor.tag}`, iconURL: interactor.user.displayAvatarURL() })
            .setTimestamp();

        return interaction.reply({ embeds: [embed] });
    }
}