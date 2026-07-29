// @ts-check
module.exports = {
    customId: 'roleinfo_role',

    async execute(interaction) {
        await interaction.deferUpdate();
        
        const roleId = interaction.values[0];
        const role = interaction.guild.roles.cache.get(roleId);

        if (!role) return interaction.editReply('Role not found.');

        const roleInfo = `**Role Name:** ${role.name}\n**Role ID:** ${role.id}\n**Color:** ${role.hexColor}\n**Position:** ${role.position}\n**Mentionable:** ${role.mentionable ? 'Yes' : 'No'}\n**Hoisted:** ${role.hoist ? 'Yes' : 'No'}\n**Created At:** ${role.createdAt.toDateString()}`;

        await interaction.editReply({ content: roleInfo });
    }
}