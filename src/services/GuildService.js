// @ts-check
const { updateGuild, getOrCreateGuild } = require('../repositories/GuildRepository');
const languages = require('../constants/languages');

async function setLanguage({ guildId, language }) {
    const supportedLanguages = languages.some((lang) => lang.code === language);
    if (!supportedLanguages) throw new Error(`Language ${language} is not supported. List supported languages: ${languages.map((lang) => lang.code).join(', ')}`);

    const guild = await getOrCreateGuild(guildId);
    if (guild.language === language) throw new Error(`Language is already set to ${language}`);

    return updateGuild(guildId, { language });
}

module.exports = { setLanguage };
