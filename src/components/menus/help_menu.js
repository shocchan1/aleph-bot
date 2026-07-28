// @ts-check
module.exports = {
    customId: 'help_menu',

    async execute(interaction) {
        const selected = interaction.values[0];

        switch (selected) {
            case 'utility_menu':
                return interaction.update({ content: 'Here are the utility commands that avaible.', components: [] });
                break;

            case 'mod_menu':
                return interaction.update({ content: 'Here are the moderation commands that avaible. This category can only be accessed by admins.', components: [] });
                break;

            case 'fun_menu':
                return interaction.update({ content: 'Here are the fun commands that avaible.', components: [] });
                break;
        }
    }
}