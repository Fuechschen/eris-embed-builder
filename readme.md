# eris-embed-builder

[![NPM version](https://img.shields.io/npm/v/eris-embed-builder.svg?style=flat-square)](https://npmjs.com/package/eris-embed-builder) [![npm](https://img.shields.io/npm/l/eris-embed-builder.svg?style=flat-square)]() [![npm](https://img.shields.io/npm/dm/twitch-reailtime.svg?style=flat-square)]() [![dependencies Status](https://david-dm.org/Fuechschen/eris-embed-builder/status.svg?style=flat-square)](https://david-dm.org/Fuechschen/eris-embed-builder) [![Build Status](https://img.shields.io/travis/Fuechschen/eris-embed-builder/master.svg?style=flat-square)](https://travis-ci.org/Fuechschen/eris-embed-builder)

eris-embed-builder is a small library for creating RichEmbeds on [Discord](https://discordapp.com). It's desinged to extend [Eris](https://abal.moe/Eris), however it will work with every node-js library you can imagine.

### Installation

`npm i -S eris-embed-builder`

### Usage

If you are using Eris, it's as easy as it can get. Just put `require('eris-embed-builder)` somewhere in your code before you create your client (`new Eris()` or `new Eris.CommandClient()`).
This will expose a new method on every channel (`channel.createEmbed()`) and the client (`client.createEmbed(channelID)`). These Methods will return a new EmbedBuilder on which you can insert your data. To finally send the embed, call `.send()` on the EmbedBuilder.
You can find the full API-documentation [here](api.md).

If you are not using eris, you can still use the normal embedbuilder. After constructing the embed, you get the sendable embed throug `.sendable`