var domElementValue = require('dom-element-value');
var toCamelCase = require('to-camel-case');
var hasRemovePropertyInStyle = "removeProperty" in document.createElement("a").style;

/**
 * DOM element manipulation functions.
 */

/**
 * Gets/Sets a DOM element attribute (accept dashed attribute).
 *
 * @param  Object element A DOM element.
 * @param  String name    The name of an attribute.
 * @param  String value   The value of the attribute to set, `undefined` to remove it or none
 *                        to get the current attribute value.
 * @return String         The current/new attribute value or `undefined` when removed.
 */
function attr(element, name, value) {
  name = toCamelCase(name === 'for' ? 'htmlFor' : name);
  if (arguments.length === 2) {
    return element.getAttribute(name);
  }
  if (!value) {
    return element.removeAttribute(name);
  }
  element.setAttribute(name, value);
  return value;
}

/**
 * Gets/Sets a DOM element attribute with a specified namespace (accept dashed attribute).
 *
 * @param  Object element A DOM element.
 * @param  String name    The name of an attribute.
 * @param  String value   The value of the attribute to set, `undefined` to remove it or none
 *                        to get the current attribute value.
 * @return String         The current/new attribute value or `undefined` when removed.
 */
function attrNS(element, ns, name, value) {
  name = toCamelCase(name);
  if (arguments.length === 3) {
    return element.getAttributeNS(ns, name);
  }
  if (!value) {
    return element.removeAttributeNS(ns, name);
  }
  element.setAttributeNS(ns, name, value);
  return value;
}

/**
 * Gets/Sets a DOM element property.
 *
 * @param  Object element A DOM element.
 * @param  String name    The name of a property.
 * @param  String value   The value of the property to set, or none to get the current
 *                        property value.
 * @return String         The current/new property value.
 */
function prop(element, name, value){
  if (arguments.length === 2) {
    return element[name];
  }
  return element[name] = value;
}

/**
 * Gets/Sets a DOM element property.
 *
 * @param  Object element A DOM element.
 * @param  String name    The name of a property.
 * @param  String value   The value of the property to set, or none to get the current
 *                        property value.
 * @return String         The current/new property value.
 */
function css(element) {
  var name;
  if (arguments.length === 3) {
    name = toCamelCase((arguments[1] === 'float') ? 'cssFloat' : arguments[1]);
    var value = arguments[2];
    if (value) {
      element.style[name] = value;
      return value;
    }
    if (hasRemovePropertyInStyle) {
      element.style.removeProperty(name);
    } else {
      element.style[name] = "";
    }
    return value;
  }
  if (typeof arguments[1] === "string") {
    name = toCamelCase((arguments[1] === 'float') ? 'cssFloat' : arguments[1]);
    return element.style[name];
  }

  var style = arguments[1];
  for (name in style) {
    css(element, name, style[name]);
  }
  return style;
}

/**
 * Gets/Sets a DOM element attribute.
 *
 * @param  Object element A DOM element.
 * @param  String name    The name of an attribute.
 * @param  String value   The value of the attribute to set, `null` to remove it or none
 *                        to get the current attribute value.
 * @return String         The current/new attribute value or `undefined` when removed.
 */
function data(element, name, value) {
  if (arguments.length === 3) {
    return attr(element, "data-" + name, value);
  }
  return attr(element, "data-" + name);
}

/**
 * Gets/Sets a DOM element text content.
 *
 * @param  Object element A DOM element.
 * @param  String value   The text value to set or none to get the current text content value.
 * @return String         The current/new text content.
 */
function text(element, value) {
  var text = (element.textContent !== undefined ? 'textContent' : 'innerText')

  if (arguments.length === 1) {
    return element[text];
  }
  return element[text] = value
}

/**
 * Checks if an element has a class.
 *
 * @param  Object  element A DOM element.
 * @param  String  name    A class name.
 * @return Boolean         Returns `true` if the element has the `name` class, `false` otherwise.
 */
function hasClass(element, name) {
  return element.classList.contains(name);
}

/**
 * Adds a class to an element.
 *
 * @param  Object  element A DOM element.
 * @param  String  name    The class to add.
 */
function addClass(element, name) {
  element.classList.add(name);
}

/**
 * Removes a class from an element.
 *
 * @param  Object  element A DOM element.
 * @param  String  name    The class to remove.
 */
function removeClass(element, name) {
  element.classList.remove(name);
}

/**
 * Toggles a class.
 *
 * @param  Object  element A DOM element.
 * @param  String  name    The class to toggle.
 */
function toggleClass(element, name) {
  var fn = hasClass(element, name) ? removeClass : addClass;
  fn(element, name);
}

module.exports = {
  attr: attr,
  attrNS: attrNS,
  prop: prop,
  css: css,
  type: domElementValue.type,
  data: data,
  text: text,
  value: domElementValue,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass
};
