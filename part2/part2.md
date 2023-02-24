## Choose Your Own DOM

Our new starting template gives the display function to you to write.

When your player makes any choice in your game, show a DOM element.

Example:

```HTML
<div>
  <img src="dungeon.jpg"/>
  <p>
    You are in a dungeon
  </p>
  <p id="instructions">
    Do you want to go left or right? L/R
  </p>
</div>
```

### Hint

Easy way to get rid of all DOM elements in a comtainer:


```js
var el = document.querySelector('#yay');
el.innerHTML = "";
```
