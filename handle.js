const source = document.getElementById('ice-cream').innerHTML;

const template = Handlebars.compile(source);

const context = {
  flavor: 'marcie'
};

const compiledHtml = template(context);

const iceCreamText = document.getElementById('scream');
iceCreamText.innerHTML = compiledHtml;
