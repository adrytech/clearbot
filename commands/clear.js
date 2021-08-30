module.exports = {
    name: 'clear',
    description: "Clear messages on chat",
    async execute(message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages that you want clear!");
        if(isNaN(args[0])) return message.reply("please enter a real number!");
        
        if(args[0] > 100) return message.reply("I canno't delete more than 100 messages!");
        if(args[0] < 1) return message.reply("I must delete least one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages=>{
            message.channel.bulkDelete(messages);
        });
    }
}