var textElement = document.getElementById('test-text');

textElement.textContent = 'RED';

var onButtonClick = function() {
	var text = textElement.textContent;
	
	if ('RED' == text) {
		text = 'BLUE';
	} else {
		text = 'RED';
	}
	
	textElement.textContent = text;
}
