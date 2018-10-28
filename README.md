<h1 align="center">Simplify jQuery :duck: </h1>

If you always choose jQuery for its syntax and you use it only for common operations like search an element and add events, this is for you.

This uses vanilla JS behind the scene, no jQuery

#### **NOTE: Currently only supports event attachment and searching elements on the DOM**

---

## File Size
jQuery minify size is **83kb** :fire: this is barely **1.3kb** :sunglasses:, so think well before include jQuery only for its syntax.

## Install
#### With package manager
To use it only do

```sh
 npm install --save simplify-jquery
```
or if you prefer yarn

```sh
 yarn add simplify-jquery
```

and

```js
 require('simplify-jquery')
```

on your main file project

#### Creating a JS file
if you don't like any of the above you can just copy this [bundle](https://raw.githubusercontent.com/raxor123/simplify-jquery/master/dist/simple-jquery.js) and copy-paste on your separated javascript file and include it in your project and have fun!

## To keep in mind
Before showing you some examples we'd like that you **keep in mind** a few things

- The returned values are **vanilla JS**, this means that it will return what a querySelector would, and instead you will get an **HTMLElement** or **NodeList** element, not a jQuery object
- If the CSS selector matches only one element, it will return an HTMLElement. If not it will return a NodeList or null.

With this I wanted to highlight that you can use this as if it were vanilla JS after the query.

# Examples:

## Click
```html
<div id="myDiv">
    <h1>Im a Div with an ID, click me!</h1>
    <p class="click-id-message"></p>
</div>

<script>
   $('#myDiv').click(function () {
     $("#myDiv .click-id-message").textContent = "you have clicked the div"
   })
</script>
```

## Submit (submition)
 Because we want to keep the vanilla JS function untouched, we had to rename the submit event to **submition** if you use **[submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit)** you would send the form instead, because we are using vanilla JS no jQuery :wink:
```html
<form>
    <p class="click-id-message"></p>
    <button>Submit</button>
</form>

<script>
    $('form').submition(function (e) {
      $("form .click-id-message").textContent = "Apply a prevent default"
      e.preventDefault()
    })
</script>
```
Notice that we use **textContent** property that is a vanilla JS property.
## Change
```html
 <select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
</select>
<p data-name="select-option"></p>

<script>
    $('select').change(function(e) {
      $("p[data-name='select-option']").textContent = "You selected the "+ e.target.value + " option"
    })
</script>
```

## Mouse Events (mouseover, mousenter, mouseout)
```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li></li>
</ul>

<script>
    $('li:not(:last-child)').mouseover(function(e) {
      $("li:last-child").textContent = "Your mouse is over the number "+ e.target.textContent
    })
</script>
```

## Key Events (keypress, keyup, keydown)
```html
<input type="text">
<p class="key-pressed"></p>

<script>
    $('input').keypress(function(e) {
        $('.key-pressed').textContent = 'You press the ' + e.key
    })
</script>
```
----
# Issues :boom:

Feel free to open issues, this is being tested and is on the 0.1.0 version
