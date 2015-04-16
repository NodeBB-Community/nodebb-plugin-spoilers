"use strict";

var plugin = {};

function spoilerify(content) {
	content = content.replace(/<blockquote>\n*<p>!([\s\S]*?)<\/p>\n*<\/blockquote>/gi, '<blockquote class="spoiler"><p>$1</p></blockquote>');

	return content;
};

plugin.post = function(data, callback) {
	if (!data || !data.postData || !data.postData.content) {
		return callback(null, data);
	}

	data.postData.content = spoilerify(data.postData.content);
	callback(null, data);
};

plugin.raw = function(data, callback) {
	if (!data) {
		return callback(null, data)
	}

	data = spoilerify(data);
	callback(null, data);
};

module.exports = plugin;
