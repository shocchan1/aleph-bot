// @ts-check
module.exports = {
    customId: 'roleormemberinfo_menu',
    
    async execute(interaction) {
        await interaction.deferUpdate();

        const id = interaction.values[0];

        const role = interaction.roles.first();
        const member = interaction.members.first();

        if (role) {
            const reply = `**Role Name:** ${role.name}\n**Role ID:** ${role.id}\n**Role Color:** ${role.hexColor}\n**Role Position:** ${role.position}\n**Role Mentionable:** ${role.mentionable ? 'Yes' : 'No'}\n**Role Created At:** ${role.createdAt.toLocaleString()}`;

            return interaction.editReply({ content: reply, components: [] });
        } else {
            const reply = `**Member Username:** ${member.user.username}\n**Member ID:** ${member.id}\n**Member Tag:** ${member.user.tag}\n**Member Joined At:** ${member.joinedAt.toLocaleString()}\n**Member Created At:** ${member.user.createdAt.toLocaleString()}\n**Member Roles:** ${member.roles.cache.map(r => r.name).join('\n')}`;

            return interaction.editReply({ content: reply, components: [] });
        }
    }
}