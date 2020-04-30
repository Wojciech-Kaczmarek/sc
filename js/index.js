let my_element = document.createElement('h1');
let my_span = document.createElement('span');

my_span.innerText = "main silver";

my_span.classList.add('span_class');

my_element.appendChild(my_span);

my_element.classList.add('custom_class');

document.body.appendChild(my_element);
