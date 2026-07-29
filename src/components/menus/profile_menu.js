// @ts-check
module.exports = {
    customId: 'profile_user',

    async execute(interaction) {
        const userId = interaction.values[0];
        const member = interaction.members.first();

        if (!member) return interaction.reply('Member not found.');

        const user = member.user;
        const profileInfo = `**Username:** ${user.username}\n**Nickname:** ${user.nickname || user.displayName}\n**ID:** ${user.id}\n**Created At:** ${user.createdAt.toDateString()}`;

        await interaction.reply({ content: profileInfo });
    }
}