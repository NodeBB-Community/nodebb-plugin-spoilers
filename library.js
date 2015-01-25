"use strict";

var plugin = {};

plugin.parse = function(data, callback) {
	if (!data || !data.postData || !data.postData.content) {
	    return callback(null, data);
	}

	plugin.parseRaw(data.postData.content, function (err, content) {
		data.postData.content = content;
		callback(err, data);
	});
};

plugin.parseRaw = function (content, callback) {
	callback(null, 
		content.replace(/<p>! *(\((.+?)\))?([\S\s]*?)<\/p>/gm, '</blockquote><blockquote class="spoiler" data-title="$2"><p>$3</p></blockquote><blockquote>')
		.replace(/<blockquote>\s*<\/blockquote>/g, '')
	);
};

module.exports = plugin;