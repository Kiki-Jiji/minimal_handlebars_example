
// travess the DOM and get the id, and access tyhe inner html
const source = document.getElementById('ice-cream').innerHTML;

// complie the template and save as the variable template
const template_variable = Handlebars.compile(source);

//the data
const context_data = {
  flavor: 'choco',
  dog: "marcie"
};

// using the template and the data variable complie the html
const compiledHtml = template_variable(context_data);

// travess the dom again and replace the id with the complied html
const iceCreamText = document.getElementById('scream');
iceCreamText.innerHTML = compiledHtml;
