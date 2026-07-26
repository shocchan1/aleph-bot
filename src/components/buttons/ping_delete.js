// @ts-check
module.exports = {
    customId: 'delete_ping',

    async execute(interaction) {
        await interaction.message.delete();
    }
}