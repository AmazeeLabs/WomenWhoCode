var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name') ? urlParams.get('name') : 'not set.';

console.log(name);

$('span.name').text(name);


console.log(name);
