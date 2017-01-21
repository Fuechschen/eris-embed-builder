## Classes

<dl>
<dt><a href="#EmbedBuilder">EmbedBuilder</a></dt>
<dd></dd>
<dt><a href="#ErisEmbedBuilder">ErisEmbedBuilder</a> ⇐ <code><a href="#EmbedBuilder">EmbedBuilder</a></code></dt>
<dd></dd>
</dl>

<a name="EmbedBuilder"></a>

## EmbedBuilder
**Kind**: global class  

* [EmbedBuilder](#EmbedBuilder)
    * [new EmbedBuilder()](#new_EmbedBuilder_new)
    * [.sendable](#EmbedBuilder+sendable) ⇒ <code>Embed</code>
    * [.title(title)](#EmbedBuilder+title) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.description(description)](#EmbedBuilder+description) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.url(url)](#EmbedBuilder+url) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.color(color)](#EmbedBuilder+color) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.author(name, [icon_url], [url])](#EmbedBuilder+author) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.timestamp(timestamp)](#EmbedBuilder+timestamp) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.field(name, value, inline)](#EmbedBuilder+field) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.thumbnail(url, [options])](#EmbedBuilder+thumbnail) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.image(url, [options])](#EmbedBuilder+image) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.footer(text, [icon_url])](#EmbedBuilder+footer) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>

<a name="new_EmbedBuilder_new"></a>

### new EmbedBuilder()
The embed object to create new embeds easily.

<a name="EmbedBuilder+sendable"></a>

### embedBuilder.sendable ⇒ <code>Embed</code>
Returns the final embed.

**Kind**: instance property of <code>[EmbedBuilder](#EmbedBuilder)</code>  
<a name="EmbedBuilder+title"></a>

### embedBuilder.title(title) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the _title of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| title | <code>String</code> | 

<a name="EmbedBuilder+description"></a>

### embedBuilder.description(description) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the description of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| description | <code>String</code> | 

<a name="EmbedBuilder+url"></a>

### embedBuilder.url(url) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the url of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| url | <code>String</code> | 

<a name="EmbedBuilder+color"></a>

### embedBuilder.color(color) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the color of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| color | <code>String/Number</code> | 

<a name="EmbedBuilder+author"></a>

### embedBuilder.author(name, [icon_url], [url]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the author of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The author name. |
| [icon_url] | <code>String</code> | The icon url, only http-urls will work. |
| [url] | <code>String</code> | The author-url. |

<a name="EmbedBuilder+timestamp"></a>

### embedBuilder.timestamp(timestamp) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the timestamp of the embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| timestamp | <code>Date</code> | 

<a name="EmbedBuilder+field"></a>

### embedBuilder.field(name, value, inline) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Add a field to an embed.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type | Default |
| --- | --- | --- |
| name | <code>String</code> |  | 
| value | <code>String</code> |  | 
| inline | <code>Boolean</code> | <code>false</code> | 

<a name="EmbedBuilder+thumbnail"></a>

### embedBuilder.thumbnail(url, [options]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the embed thumbnail.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The image url. |
| [options] | <code>Object</code> |  |
| [options.height] | <code>Number</code> | The image height. |
| [options.width] | <code>Number</code> | The image width. |

<a name="EmbedBuilder+image"></a>

### embedBuilder.image(url, [options]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the embed image.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The image url. |
| [options] | <code>Object</code> |  |
| [options.height] | <code>Number</code> | The image height. |
| [options.width] | <code>Number</code> | The image width. |

<a name="EmbedBuilder+footer"></a>

### embedBuilder.footer(text, [icon_url]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the embed footer.

**Kind**: instance method of <code>[EmbedBuilder](#EmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | Text which should be in the footer. |
| [icon_url] | <code>String</code> | The icon-url for the footer |

<a name="ErisEmbedBuilder"></a>

## ErisEmbedBuilder ⇐ <code>[EmbedBuilder](#EmbedBuilder)</code>
**Kind**: global class  
**Extends:** <code>[EmbedBuilder](#EmbedBuilder)</code>  

* [ErisEmbedBuilder](#ErisEmbedBuilder) ⇐ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.sendable](#EmbedBuilder+sendable) ⇒ <code>Embed</code>
    * [.send([sender], [channelID])](#ErisEmbedBuilder+send) ⇒ <code>\*</code>
    * [.title(title)](#EmbedBuilder+title) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.description(description)](#EmbedBuilder+description) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.url(url)](#EmbedBuilder+url) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.color(color)](#EmbedBuilder+color) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.author(name, [icon_url], [url])](#EmbedBuilder+author) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.timestamp(timestamp)](#EmbedBuilder+timestamp) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.field(name, value, inline)](#EmbedBuilder+field) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.thumbnail(url, [options])](#EmbedBuilder+thumbnail) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.image(url, [options])](#EmbedBuilder+image) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
    * [.footer(text, [icon_url])](#EmbedBuilder+footer) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>

<a name="EmbedBuilder+sendable"></a>

### erisEmbedBuilder.sendable ⇒ <code>Embed</code>
Returns the final embed.

**Kind**: instance property of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  
<a name="ErisEmbedBuilder+send"></a>

### erisEmbedBuilder.send([sender], [channelID]) ⇒ <code>\*</code>
Used to finally send the embed.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [sender] | <code>Object</code> | Either a Client or a Channel which should be used to send the embed. This is only necessary if the builder wasn't created with [eris].createEmbed or [channel].createEmbed |
| [channelID] | <code>String</code> | When the sender is a client, this is used to specify the channel the embed should be sent to. This is only necessary if the builder wasn't created with [channel].createEmbed |

<a name="EmbedBuilder+title"></a>

### erisEmbedBuilder.title(title) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the _title of the embed.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| title | <code>String</code> | 

<a name="EmbedBuilder+description"></a>

### erisEmbedBuilder.description(description) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the description of the embed.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| description | <code>String</code> | 

<a name="EmbedBuilder+url"></a>

### erisEmbedBuilder.url(url) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the url of the embed.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| url | <code>String</code> | 

<a name="EmbedBuilder+color"></a>

### erisEmbedBuilder.color(color) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the color of the embed.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| color | <code>String/Number</code> | 

<a name="EmbedBuilder+author"></a>

### erisEmbedBuilder.author(name, [icon_url], [url]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the author of the embed.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The author name. |
| [icon_url] | <code>String</code> | The icon url, only http-urls will work. |
| [url] | <code>String</code> | The author-url. |

<a name="EmbedBuilder+timestamp"></a>

### erisEmbedBuilder.timestamp(timestamp) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the timestamp of the embed.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type |
| --- | --- |
| timestamp | <code>Date</code> | 

<a name="EmbedBuilder+field"></a>

### erisEmbedBuilder.field(name, value, inline) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Add a field to an embed.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type | Default |
| --- | --- | --- |
| name | <code>String</code> |  | 
| value | <code>String</code> |  | 
| inline | <code>Boolean</code> | <code>false</code> | 

<a name="EmbedBuilder+thumbnail"></a>

### erisEmbedBuilder.thumbnail(url, [options]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the embed thumbnail.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The image url. |
| [options] | <code>Object</code> |  |
| [options.height] | <code>Number</code> | The image height. |
| [options.width] | <code>Number</code> | The image width. |

<a name="EmbedBuilder+image"></a>

### erisEmbedBuilder.image(url, [options]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the embed image.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The image url. |
| [options] | <code>Object</code> |  |
| [options.height] | <code>Number</code> | The image height. |
| [options.width] | <code>Number</code> | The image width. |

<a name="EmbedBuilder+footer"></a>

### erisEmbedBuilder.footer(text, [icon_url]) ⇒ <code>[EmbedBuilder](#EmbedBuilder)</code>
Set the embed footer.

**Kind**: instance method of <code>[ErisEmbedBuilder](#ErisEmbedBuilder)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | Text which should be in the footer. |
| [icon_url] | <code>String</code> | The icon-url for the footer |

