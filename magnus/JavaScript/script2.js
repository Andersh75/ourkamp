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
	
	var para = document.createElement("p");
	var node = document.createTextNode("This is new.");
	para.appendChild(node);

	var body = document.body.appendChild(para);
}
