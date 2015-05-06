# dom-element

[![Build Status](https://travis-ci.org/crysalead-js/dom-element.svg?branch=master)](https://travis-ci.org/crysalead-js/dom-element)

DOM element manipulation functions.

## API

### attr(element, name, value)

Gets/sets an attribute.

```js
domElement.atts(element, "class", "active"); // Setter
domElement.atts(element, "class"); //Getter
```

### removeAttr(element, name)

Removes an attribute.

```js
domElement.removeAttr(element, "class");
```

### prop(element, name, value)

Gets/sets an property.

```js
domElement.prop(element, "className", "active"); // Setter
domElement.prop(element, "className"); // Getter
```

### css(element, name, value)

Gets/sets a style.

```js
domElement.css(element, "color", "black"); // Setter
domElement.css(element, "color"); // Getter
```

### css(element, object)

Sets a style using an object as value.

```js
domElement.css(element, {
  color: "black",
  background: "white"
});
```

### data(element, name, value)

Gets/sets some data.

```js
domElement.data(element, "cutom", "hello"); // Setter
domElement.data(element, "cutom"); // Getter
```

### type(element)

Returns the type of an input or the node name of the element if the type is not set.

```js
domElement.type(element);
```

### text(element, value)

Gets/sets the text content.

```js
domElement.data(element, "cutom", "hello"); // Setter
domElement.data(element, "cutom"); // Getter
```

### value(element, value)

Gets/sets the element value.

```js
domElement.data(element, "cutom", "hello"); // Setter
domElement.data(element, "cutom"); // Getter
```

### hasClass(element, name)

Checks if the element has a class.

```js
domElement.hasClass(element);
```

### addClass(element, name)

Adds a class.

```js
domElement.addClass(element, name);
```

### removeClass(element, name)

Removes a class.

```js
domElement.removeClass(element, name);
```

### toggleClass(element, name)

Toggles a class.

```js
domElement.toggleClass(element, name);
```