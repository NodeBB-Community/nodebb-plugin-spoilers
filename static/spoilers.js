$('document').ready(function() {
	require(['composer', 'composer/controls'], function(composer, controls) {
		composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, ">! Spoiler");
				controls.updateTextareaSelection(textarea, selectionStart + 3, selectionStart + 12);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '>! ', '');
				controls.updateTextareaSelection(textarea, selectionStart + 3, selectionEnd + 3);
			}
		});
	});
});