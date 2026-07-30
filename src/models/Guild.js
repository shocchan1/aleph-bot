// @ts-check
const mongoose = require('mongoose');

const GuildSchema = new mongoose.Schema({
    guildId: { type: String, required: true, unique: true },
    language: { type: String, default: 'en' },
    logChannel: { type: String, default: null },
    setuCompleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Guild', GuildSchema);