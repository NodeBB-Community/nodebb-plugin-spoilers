"use strict";

var plugin = {};

plugin.parse = function(postContent, callback) {
	// this regex could be better
	postContent = postContent
		.replace(/<p>! *([\S\s]*?)<\/p>/gm, '</blockquote><blockquote class="spoiler"><p>$1</p></blockquote><blockquote>')
		.replace(/<blockquote>\s*<\/blockquote>/g, '');

	callback(null, postContent);
};

module.exports = plugin;