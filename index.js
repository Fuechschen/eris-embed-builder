try {
    let Eris = require('eris'),
        Embed = require('./ErisEmbed');

    Eris.Client.prototype.createEmbed = function (channelID, data) {
        return new Embed(data, this, channelID);
    };

    Eris.Channel.prototype.createEmbed = function (data) {
        return new Embed(data, this);
    };
} catch (err) {
    module.exports = require('./Embed');
}

