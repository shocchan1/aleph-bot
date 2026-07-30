// @ts-check
module.exports = {
    customId: 'admin_channel',

    async execute(interaction) {
        await interaction.deferUpdate();

        const channelId = interaction.values[0];
        const channel = interaction.guild.channels.cache.get(channelId);

        if (!channel) return interaction.editReply('Channel not found...');

        const reply = `**Channel Name:** ${channel.name}\n**Channel ID:** ${channel.id}\n**Channel Type:** ${channel.type}\n**Channel Topic:** ${channel.topic || 'No topic set.'}\n**Channel NSFW:** ${channel.nsfw ? 'Yes' : 'No'}\n**Channel Created At:** ${channel.createdAt.toLocaleString()}`;

        return interaction.editReply({ content: reply, components: [] });
    }
}