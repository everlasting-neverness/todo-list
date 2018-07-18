function createElement(elementName, properties, contentArray) {
  let element = document.createElement(elementName);

  for (let i = 0; i < contentArray.length; i++) {
    let currentChild = contentArray[i];
    if (typeof currentChild === 'string') {
      let content = document.createTextNode(currentChild);
      element.appendChild(content);
    } else if (typeof currentChild !== null) {
      element.appendChild(currentChild);
    }
  }

  if (properties) {
    for (let property in properties) {
      if (property === 'className' || property === 'checked' || property === 'onclick') {
        element[property] = properties[property];
      } else {
        element.setAttribute(property, properties[property]);
      }
    }
  }
  return element;
}


// const el = document.createElement('span');
// createElement('p', { a: 'b' }, ['hello', 'world', el, 'whatever']); // <p a="b">helloworld</p>
