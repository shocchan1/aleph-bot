// @ts-check
module.exports = {
    customId: 'feedback_modal',

    async execute(interaction) {
        const title = interaction.fields.getTextInputValue('feedback_title');
        const desc = interaction.fields.getTextInputValue('feedback_description');

        await interaction.channel.send({ content: `# **RECEIVED FEEDBACK**\n\nHey, hey, Master! Someone has sent feedback for us. Let's take a look, shall we?\n\nTitle:\n${title}\n\nDescription:\n${desc}` });

        return interaction.update({ content: 'Thanks you for the feedback!', components: [] });
    }
}