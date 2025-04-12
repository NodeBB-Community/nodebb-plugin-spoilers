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

	$('body').on('click', '.spoiler > button', function() {
		var $this = $(this);
		var $spoiler = $this.closest('.spoiler');
		if ($spoiler.hasClass('border-warning')) {
			$spoiler.removeClass('border-warning').addClass('border-success');
			$spoiler.find('p.d-none').removeClass('d-none').addClass('d-block');
		} else {
			$spoiler.removeClass('border-success').addClass('border-warning');
			$spoiler.find('p.d-block').removeClass('d-block').addClass('d-none');
		}
	});
});