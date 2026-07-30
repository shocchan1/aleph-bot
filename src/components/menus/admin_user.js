// @ts-check
module.exports = {
    customId: 'admin_user',

    async execute(interaction) {
        await interaction.deferUpdate();
        const userId = interaction.values[0];
        const member = interaction.members.first();

        if (!member) return interaction.editReply('Member not found...');

        const user = member.user;
        const profileInfo = `**Username:** ${user.username}\n**Nickname:** ${user.nickname || user.displayName}\n**ID:** ${user.id}\n**Created At:** ${user.createdAt.toDateString()}`;

        return interaction.editReply({ content: profileInfo, components: [] });
    }
}