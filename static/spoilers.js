$('document').ready(function() {
	require(['composer', 'composer/controls'], function(composer, controls) {
		composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {
			var prefix = '>! ';
			var title = '(Spoiler) ';
			if(selectionStart === selectionEnd){
				var text = 'Text';
				controls.insertIntoTextarea(textarea, prefix + title + text);
				controls.updateTextareaSelection(textarea, selectionStart + (prefix.length + title.length), selectionStart + (prefix.length + title.length + text.length));
			} else {
				controls.wrapSelectionInTextareaWith(textarea, prefix + title, '');
				controls.updateTextareaSelection(textarea, selectionStart + (prefix.length + title.length), selectionEnd + (prefix.length + title.length));
			}
		});
	});
});