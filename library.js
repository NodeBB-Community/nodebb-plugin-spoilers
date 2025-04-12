"use strict";

const plugin = module.exports;

plugin.parse = function(data) {
	if (!data || !data.postData || !data.postData.content) {
	    return data;
	}

	data.postData.content = parse(data.postData.content);
	return data;
};

plugin.parseRaw = function (content) {
	return parse(content);
};

function parse (content) {
	return content.replace(/<blockquote>\s*<p.*>! *(\((.+?)\))?([\S\s]*?)<\/p>\s*<\/blockquote>/gm, function(match, p1, p2, p3) {
		return `<blockquote class="spoiler border-warning"><button class="btn btn-sm btn-ghost border">${p2 || 'Spoiler'}</button><p class="d-none mt-3 text-sm">${p3}</p></blockquote>`;
	});
}

