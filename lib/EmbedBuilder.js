class EmbedBuilder {
    /**
     * The embed object to create new embeds easily.
     * @constructor
     */
    constructor(data = {}) {
        this._title = data.title;
        this._type = data.type || 'rich';
        this._description = data.description;
        this._url = data.url;
        this._timestamp = data.timestamp;
        this._color = data.color;

        this._footer = data.footer;
        this._image = data.image;
        this._thumbnail = data.thumbnail;
        this._video = data.video;
        this._provider = data.provider;
        this._author = data.author;
        this._fields = data.fields || [];

        if (this._title && this._title.length > 256) throw new Error('The _title should not be longer than 265 characters.');
        if (this._description && this._description.length > 2048) throw new Error('The description should not be longer than 265 characters.');
        if (this._color && (this._color < 0 || this._color > 0xFFFFFF)) throw new Error('Color must be a valid HEX-Color for HTML or be an integer within 0 - 16777215');
        if (this._color && isNaN(this._color)) throw new Error('Could not convert color to number.');
        if (this._footer && this._footer.text.length > 2048) throw new Error('A footer may not be longer than 2048 characters');
        if (this._fields.length >= 25) throw new Error('You cannot add more than 25 fields.');
        for (let f of this._fields) {
            if (f.name.length > 256) throw new Error('A field name may not be longer than 256 characters.');
            if (f.value.length > 1024) throw new Error('A field value may not be longer than 1024 characters.');
        }
    }

    /**
     * Set the _title of the embed.
     * @param {String} title
     * @return {EmbedBuilder}
     */
    title(title) {
        if (title.length > 256) throw new Error('The _title should not be longer than 265 characters.');
        this._title = title;
        return this;
    }

    /**
     * Set the description of the embed.
     * @param {String} description
     * @return {EmbedBuilder}
     */
    description(description) {
        if (description.length > 2048) throw new Error('The description should not be longer than 265 characters.');
        this._description = description;
        return this;
    }

    /**
     * Set the url of the embed.
     * @param {String} url
     * @return {EmbedBuilder}
     */
    url(url) {
        this._url = url;
        return this;
    }

    /**
     * Set the color of the embed.
     * @param {String/Number} color
     * @return {EmbedBuilder}
     */
    color(color) {
        let base = 10;
        if (typeof color === 'string' && color.startsWith('#')) {
            color = color.replace('#', '');
            base = 16;
        }
        color = parseInt(color, base);
        if (color < 0 || color > 0xFFFFFF) throw new Error('Color must be a valid HEX-Color for HTML or be an integer within 0 - 16777215');
        else if (color && isNaN(color)) throw new Error('Could not convert color to number.');
        this._color = color;
        return this;
    }

    /**
     * Set the author of the embed.
     * @param {String} name The author name.
     * @param {String} [icon_url] The icon url, only http-urls will work.
     * @param {String} [url] The author-url.
     * @return {EmbedBuilder}
     */
    author(name, icon_url, url) {
        this._author = {name, icon_url, url};
        return this;
    }

    /**
     * Set the timestamp of the embed.
     * @param {Date} timestamp
     * @return {EmbedBuilder}
     */
    timestamp(timestamp = new Date()) {
        this._timestamp = timestamp;
        return this;
    }

    /**
     * Add a field to an embed.
     * @param {String} name
     * @param {String} value
     * @param {Boolean} inline
     * @return {EmbedBuilder}
     */
    field(name, value, inline = false) {
        if (this._fields.length >= 25) throw new Error('You cannot add more than 25 fields.');
        if (name.length > 256) throw new Error('A field name may not be longer than 256 characters.');
        if (value.length > 1024) throw new Error('A field value may not be longer than 1024 characters.');
        this._fields.push({name, value, inline});
        return this;
    }

    /**
     * Set the embed thumbnail.
     * @param {String} url The image url.
     * @param {Object} [options]
     * @param {Number} [options.height] The image height.
     * @param {Number} [options.width] The image width.
     * @return {EmbedBuilder}
     */
    thumbnail(url, options = {}) {
        this._thumbnail = {url, height: options.height, width: options.width};
        return this;
    }

    /**
     * Set the embed image.
     * @param {String} url The image url.
     * @param {Object} [options]
     * @param {Number} [options.height] The image height.
     * @param {Number} [options.width] The image width.
     * @return {EmbedBuilder}
     */
    image(url, options = {}) {
        this._thumbnail = {url, height: options.height, width: options.width};
        return this;
    }

    /**
     * Set the embed footer.
     * @param {String} text Text which should be in the footer.
     * @param {String} [icon_url] The icon-url for the footer
     * @return {EmbedBuilder}
     */
    footer(text, icon_url) {
        if (text.length > 2048) throw new Error('A footer may not be longer than 2048 characters');
        this._footer = {text, icon_url};
        return this;
    }

    /**
     * Returns the final embed.
     * @return {Embed}
     */
    get sendable() {
        return {
            title: this._title,
            type: this._type,
            description: this._description,
            url: this._url,
            timestamp: this._timestamp,
            color: this._color,
            footer: this._footer,
            image: this._image,
            thumbnail: this._thumbnail,
            video: this._video,
            provider: this._provider,
            author: this._author,
            fields: this._fields
        };
    }
}

module.exports = EmbedBuilder;