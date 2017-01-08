let Eris = require('eris'),
    Embed = require('./Embed');

class ErisEmbed extends Embed {
    constructor(data, sender, channelID) {
        this.sender = sender;
        this.channelID = channelID;
        super(data);
    }

    send(sender, {content, channelID}) {
        if (!sender && this.sender) sender = this.sender;
        if (!channelID && this.channelID) channelID = this.channelID;

        if (content) {
            if (typeof content === 'object') content.embed = this.sendable;
            else content = {content, embed: this.sendable};
        } else content = {embed: this.sendable};

        if (sender instanceof Eris.Client) return sender.createMessage(channelID, content);
        else if (sender instanceof Eris.Channel) return sender.createMessage(content);
    }
}

module.exports = ErisEmbed;