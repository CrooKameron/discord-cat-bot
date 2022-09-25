const { SlashCommandBuilder } = require('discord.js'); 
const { execute } = require('../../events/client/ready');
const axios = require('axios')







module.exports = {
    data: new SlashCommandBuilder()
    .setName('catpic')
    .setDescription('i post cat pics!!!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });


        
        let getImage = async () => {
            let response = await axios.get(
                "https://api.thecatapi.com/v1/images/search"
            );
            let catImage = response.data;
            return catImage;
        }
        
        let imageValue = await getImage();
        console.log(imageValue)


        const newMessage = `${imageValue[0].url}`;
        await interaction.editReply({
            content: newMessage
        });
    }
} 















async function newFunction() {
    return await getImage();
}
    