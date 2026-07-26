// @ts-check
module.exports = {
    customId: 'feedback_modal',

    async execute(interaction) {
        const title = interaction.fields.getTextInputValue('feedback_title');
        const desc = interaction.fielads.getTextInputValue('feedback_description');

        return interaction.update({ content: 'Thanks you for the feedback!', components: [] });
    }
}