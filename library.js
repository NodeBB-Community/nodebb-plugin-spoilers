"use strict";

var plugin = {};

plugin.parse = function(data, callback) {
	if (!data || !data.postData || !data.postData.content) {
	    return callback(null, data);
	}
	// this regex could be better
	data.postData.content = data.postData.content
		.replace(/<p>! *([\S\s]*?)<\/p>/gm, '</blockquote><blockquote class="spoiler"><p>$1</p></blockquote><blockquote>')
		.replace(/<blockquote>\s*<\/blockquote>/g, '');

	callback(null, data);
};

module.exports = plugin;