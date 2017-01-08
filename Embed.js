class Embed {
    /**
     * The embed object to create new embeds easily.
     * @constructor
     */
    constructor(data = {}) {
        this.title = data.title;
        this.type = data.type || 'rich';
        this.description = data.description;
        this.url = data.url;
        this.timestamp = data.timestamp;
        this.color = data.color;

        this.footer = data.footer;
        this.image = data.image;
        this.thumbnail = data.thumbnail;
        this.video = data.video;
        this.provider = data.provider;
        this.author = data.author;
        this.fields = data.fields || [];

        if (this.title && this.title.length > 256) throw new Error('The title should not be longer than 265 characters.');
        if (this.description && this.description.length > 2048) throw new Error('The description should not be longer than 265 characters.');
        if (this.color && (this.color < 0 || this.color > 0xFFFFFF)) throw new Error('Color must be a valid HEX-Color for HTML or be an integer within 0 - 16777215');
        if (this.color && isNaN(this.color)) throw new Error('Could not convert color to number.');
        if (this.footer.text.length > 2048) throw new Error('A footer may not be longer than 2048 characters');
        if (this.fields.length >= 25) throw new Error('You cannot add more than 25 fields.');
        for (let f of this.fields) {
            if (f.name.length > 256) throw new Error('A field name may not be longer than 256 characters.');
            if (f.value.length > 1024) throw new Error('A field value may not be longer than 1024 characters.');
        }
    }

    /**
     * Set the title of the embed.
     * @param {String} title
     * @return {Embed}
     */
    setTitle(title) {
        if (title.length > 256) throw new Error('The title should not be longer than 265 characters.');
        this.title = title;
        return this;
    }

    /**
     * Set the description of the embed.
     * @param {String} description
     * @return {Embed}
     */
    setDescription(description) {
        if (description.length > 2048) throw new Error('The description should not be longer than 265 characters.');
        this.description = description;
        return this;
    }

    setURL(url) {
        this.url = url;
        return this;
    }

    setColor(color) {
        let base = 10;
        if (typeof color === 'string' && color.startsWith('#')) {
            color = color.replace('#', '');
            base = 16;
        }
        color = parseInt(color, base);
        if (color < 0 || color > 0xFFFFFF) throw new Error('Color must be a valid HEX-Color for HTML or be an integer within 0 - 16777215');
        else if (color && isNaN(color)) throw new Error('Could not convert color to number.');
        this.color = color;
        return this;
    }

    setAuthor(name, icon_url, url) {
        this.author = {name, icon_url, url};
        return this;
    }

    setTimestamp(timestamp = new Date()) {
        this.timestamp = timestamp;
        return this;
    }

    addField(name, value, inline = false) {
        if (this.fields.length >= 25) throw new Error('You cannot add more than 25 fields.');
        if (name.length > 256) throw new Error('A field name may not be longer than 256 characters.');
        if (value.length > 1024) throw new Error('A field value may not be longer than 1024 characters.');
        this.fields.push({name: name, value, inline});
        return this;
    }

    setThumbnail(url, {height, width}) {
        this.thumbnail = {url, height, width};
        return this;
    }

    setImage(url, {height, width}) {
        this.thumbnail = {url, height, width};
        return this;
    }

    setFooter(text, icon_url) {
        if (text.length > 2048) throw new Error('A footer may not be longer than 2048 characters');
        this.footer = {text, icon_url};
        return this;
    }

    get sendable() {
        return {
            title: this.title,
            type: this.type,
            description: this.description,
            url: this.url,
            timestamp: this.timestamp,
            color: this.color,
            footer: this.footer,
            image: this.image,
            thumbnail: this.thumbnail,
            video: this.video,
            provider: this.provider,
            author: this.author,
            fields: this.fields
        };
    }
}

module.exports = Embed;