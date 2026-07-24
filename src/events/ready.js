// @ts-check//
const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,

    async execute(client) {
        console.log(`[READY] Logged in as ${client.user.tag}`);

        client.user.setActivity(
            {
                name: 'Your Heart~',
                type: ActivityType.Playing
            }
        );
    }
}