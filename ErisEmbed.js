let Eris = require('eris'),
    Embed = require('./Embed');

class ErisEmbed extends Embed {
    constructor(data, sender, channelID) {
        this.sender = sender;
        this.channelID = channelID;
        super(data);
    }

    send(sender, channelID) {
        if (!sender) {
            if (this.sender) sender = this.sender;
            else throw  new Error('Sender for embed could not be found.');
        }

        if (!channelID && sender instanceof Eris.Client) {
            if (this.channelID) channelID = this.channelID;
            else throw new Error('ChannelID could not be found');
        }


        if (sender instanceof Eris.Client) return sender.createMessage(channelID, {embed: this.sendable});
        else if (sender instanceof Eris.Channel) return sender.createMessage({embed: this.sendable});
    }
}

module.exports = ErisEmbed;