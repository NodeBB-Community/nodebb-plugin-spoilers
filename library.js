"use strict";

var plugin = {};

plugin.parse = function(data, callback) {
	var postContent = data && data.postData && data.postData.content;

	if (postContent) {
		// this regex could be better
		data.postData.content = postContent
			.replace(/<p>! *([\S\s]*?)<\/p>/gm, '</blockquote><blockquote class="spoiler"><p>$1</p></blockquote><blockquote>')
			.replace(/<blockquote>\s*<\/blockquote>/g, '');
	}

	callback(null, data);
};

module.exports = plugin;
