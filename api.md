## Classes

<dl>
<dt><a href="#EmbedBuilder">EmbedBuilder</a></dt>
<dd></dd>
<dt><a href="#ErisEmbedBuilder">ErisEmbedBuilder</a></dt>
<dd></dd>
</dl>

<a name="EmbedBuilder"></a>

## EmbedBuilder
**Kind**: global class  

* [EmbedBuilder](#EmbedBuilder)
    * [new EmbedBuilder()](#new_EmbedBuilder_new)
    * [.sendable](#EmbedBuilder+sendable) ⇒ <code>Embed</code>
    * [.setTitle(title)](#EmbedBuilder+setTitle) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.setDescription(description)](#EmbedBuilder+setDescription) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.setURL(url)](#EmbedBuilder+setURL) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.setColor(color)](#EmbedBuilder+setColor) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.setAuthor(name, [icon_url], [url])](#EmbedBuilder+setAuthor) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.setTimestamp(timestamp)](#EmbedBuilder+setTimestamp) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.addField(name, value, inline)](#EmbedBuilder+addField) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.setThumbnail(url, [options])](#EmbedBuilder+setThumbnail) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.setImage(url, [options])](#EmbedBuilder+setImage) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.setFooter(text, [icon_url])](#EmbedBuilder+setFooter) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>

<a name="new_EmbedBuilder_new"></a>

### new EmbedBuilder()
The embed object to create new embeds easily.

<a name="EmbedBuilder+sendable"></a>

### embedBuilder.sendable ⇒ <code>Embed</code>
Returns the final embed.

**Kind**: instance property of <code>[EmbedBuilder](#EmbedBuilder)</code>  
<a name="EmbedBuilder+setTitle"></a>

### embedBuilder.setTitle(title) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the title of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| title | <code>String</code> | 

<a name="EmbedBuilder+setDescription"></a>

### embedBuilder.setDescription(description) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the description of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| description | <code>String</code> | 

<a name="EmbedBuilder+setURL"></a>

### embedBuilder.setURL(url) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the url of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| url | <code>String</code> | 

<a name="EmbedBuilder+setColor"></a>

### embedBuilder.setColor(color) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the color of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| color | <code>String/Number</code> | 

<a name="EmbedBuilder+setAuthor"></a>

### embedBuilder.setAuthor(name, [icon_url], [url]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
SEt the author of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The author name. |
| [icon_url] | <code>String</code> | The icon url, only http-urls will work. |
| [url] | <code>String</code> | The author-url. |

<a name="EmbedBuilder+setTimestamp"></a>

### embedBuilder.setTimestamp(timestamp) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
SEt the timestamp of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| timestamp | <code>Date</code> | 

<a name="EmbedBuilder+addField"></a>

### embedBuilder.addField(name, value, inline) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Add a field to an embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type | Default |
| --- | --- | --- |
| name | <code>String</code> |  | 
| value | <code>String</code> |  | 
| inline | <code>Boolean</code> | <code>false</code> | 

<a name="EmbedBuilder+setThumbnail"></a>

### embedBuilder.setThumbnail(url, [options]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the embed thumbnail.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The image url. |
| [options] | <code>Object</code> |  |
| [options.height] | <code>Number</code> | The image height. |
| [options.width] | <code>Number</code> | The image width. |

<a name="EmbedBuilder+setImage"></a>

### embedBuilder.setImage(url, [options]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the embed image.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The image url. |
| [options] | <code>Object</code> |  |
| [options.height] | <code>Number</code> | The image height. |
| [options.width] | <code>Number</code> | The image width. |

<a name="EmbedBuilder+setFooter"></a>

### embedBuilder.setFooter(text, [icon_url]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the embed footer.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | Text which should be in the footer. |
| [icon_url] | <code>String</code> | The icon-url for the footer |

<a name="ErisEmbedBuilder"></a>

## ErisEmbedBuilder
**Kind**: global class  
<a name="ErisEmbedBuilder+send"></a>

### erisEmbedBuilder.send([sender], [channelID]) ⇒ <code>\*</code>
Used to finally send the embed.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [sender] | <code>Object</code> | Either a Client or a Channel which should be used tosend the embed. |
| [channelID] | <code>String</code> | When the sender is a client, this is used to specify the channel the embed should be sent to. |

