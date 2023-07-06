# Day 007 - Animating Color
Another day and another building on a previous day sketch kind of day. Last we stopped was on a challenge
to make the sketch draw vertical animated lines, today we use that same sketch but with minor adjustments.

- we first remove the `background` method because well we want teh lines to keep their positions.
- second we add another parameter to the `random` method now it takes a min value as well. `random(min, max)`
- finally we adjust the canvas `size` to not be the default 100 x 100 but rather now be `size(200, 200)`

  and with that we have the new sketch that looks like

  ``` javascript
  function draw() {
  	stroke(random(200, 255), random(100, 155), random(100, 155));
  
  	let x = random(width);
  
  	line(x, 0, x, height);
  }
  ```

  and the result of

  ![](https://github.com/athoug/art-daily/blob/main/art/day-007/thumbnail.gif)

  And we've done a week so far, and now I'm a point and line expert. lookout geometry I'm getting closer to shapes
