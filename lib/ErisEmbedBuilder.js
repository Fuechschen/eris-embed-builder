let Eris = require('eris'),
    Embed = require('./EmbedBuilder');

class ErisEmbedBuilder extends Embed {
    /**
     * @constructor
     */
    constructor(data, sender, channelID) {
        super(data);
        this.sender = sender;
        this.channelID = channelID;
    }

    /**
     * Used to finally send the embed.
     * @param {Object} [sender] Either a Client or a Channel which should be used tosend the embed.
     * @param {String} [channelID] When the sender is a client, this is used to specify the channel the embed should be sent to.
     * @return {*}
     */
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

module.exports = ErisEmbedBuilder;