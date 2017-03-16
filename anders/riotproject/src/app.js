var riot = require('riot')



require('./tags/sample-output.tag')
require('./tags/hello-world.tag')

const css = require('./app.scss')

document.addEventListener('DOMContentLoaded', function() {
    riot.mount('hello-world');
    riot.mount('sample-output', {greet:'Seeun'});

})
