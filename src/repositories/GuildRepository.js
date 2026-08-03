// @ts-check
const Guild = require('../models/Guild');

async function findByGuildId(guildId) {
    return Guild.findOne({ guildId });
}

async function createGuild(data) {
    return Guild.create(data);
}

async function updateGuild(guildId, updateData) {
    return Guild.findOneAndUpdate({ guildId }, updateData, { new: true });
}

async function deleteGuild(guildId) {
    return Guild.deleteOne({ guildId });
}

async function getOrCreateGuild(guildId) {
    let guild = await findByGuildId(guildId);
    if (!guild) {
        guild = await createGuild({ guildId });
    }
    return guild;
}

module.exports = { findByGuildId, createGuild, updateGuild, deleteGuild, getOrCreateGuild };