try {
    let Eris = require('eris'), //eslint-disable-line global-require
        Embed = require('./lib/ErisEmbedBuilder');  //eslint-disable-line global-require

    Eris.Client.prototype.createEmbed = function (channelID, data) {
        return new Embed(data, this, channelID);
    };

    Eris.Channel.prototype.createEmbed = function (data) {
        return new Embed(data, this);
    };
} catch (err) {
    module.exports = require('./lib/EmbedBuilder');  //eslint-disable-line global-require
}

