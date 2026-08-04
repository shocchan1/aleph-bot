// @ts-check
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { setLanguage } = require('../../../services/GuildService');
const languages = require('../../../constants/languages').map(lang => ({ name: lang.name, value: lang.code }));

module.exports = {
    name: 'set-language',
    data: new SlashCommandBuilder()
        .setName('set-language')
        .setDescription('Set the language for the bot in this server')
        .addStringOption(opt =>
            opt.setName('language')
                .setDescription('The language of the bot to set')
                .setRequired(true)
                .addChoices(languages)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {

        try {
            await setLanguage({ guildId: interaction.guild.id, language: interaction.options.getString('language') });

            return interaction.reply(`Language has been set to ${interaction.options.getString('language')}`);
        } catch (error) {
            return interaction.reply('Failed to set language: ' + error.message);
        }
    }
}