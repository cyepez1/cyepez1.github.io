# CRT slideshow images

Drop slideshow images for the index CRT here (lowercase-hyphenated names,
per site convention), then list each filename in the `CRT_SLIDES` array at
the bottom of `index.html`:

```js
var CRT_SLIDES = [
  'images/crt-slides/backyard-winter.jpg',
  'images/crt-slides/archer-ave-dusk.jpg',
];
```

The ◄ ► buttons on the CRT cycle through the list. An empty list shows the
placeholder screen. When the CMS lands (W3), this folder becomes a managed
media collection and the hand-edited array goes away.
