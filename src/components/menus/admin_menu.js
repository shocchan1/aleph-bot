// @ts-check
const { UserSelectMenuBuilder, RoleSelectMenuBuilder, ChannelSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
    customId: 'admin_menu',

    async execute(interaction) {
        const values = interaction.values[0];

        switch (values) {
            case 'admin_user_menu':
                const userMenu = new UserSelectMenuBuilder()
                    .setCustomId('admin_user')
                    .setMinValues(1)
                    .setMaxValues(1)
                    .setPlaceholder('Select a member...')
                    .setRequired(true);

                const row = new ActionRowBuilder().addComponents(userMenu);

                return interaction.update({ content: 'Now, please select a member below to get their full information', components: [row] });

            case 'admin_role_menu':
                const roleMenu = new RoleSelectMenuBuilder()
                    .setCustomId('admin_role')
                    .setMinValues(1)
                    .setMaxValues(1)
                    .setPlaceholder('Select a role...')
                    .setRequired(true);

                const row1 = new ActionRowBuilder().addComponents(roleMenu);

                return interaction.update({ content: 'Now, please select a role to get its full information.', components: [row1] });

            case 'admin_channel_menu':
                const channelMenu = new ChannelSelectMenuBuilder()
                    .setCustomId('admin_channel')
                    .setMinValues(1)
                    .setMaxValues(1)
                    .setPlaceholder('Select a channel to get its full information.')
                    .setRequired(true);

                const row2 = new ActionRowBuilder().addComponents(channelMenu);

                return interaction.update({ content: 'Now, please select a channel to get its full information.', components: [row2] });
        }
    }
}