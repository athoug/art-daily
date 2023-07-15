# Day 016 - Smallest Drawing Program
I just have to say before I write anything, todays sketch was super fun!! It's the first actual functioning program. 
So we did the simplist drawing program, and we got to explore a couple of new properties, and functions in processing/p5

Now in any drawing application the brush's position is wherever the mouse head is, and luckly we can do just that by using 
the variavles [`mouseX`](https://p5js.org/reference/#/p5/mouseX) and [`mouseY`](https://p5js.org/reference/#/p5/mouseY) 
``` javascript
  point(mouseX, mouseY);
```

Now we can just stop there but drawing apps don't just draw consistantly, they start drawing when we press on the mouse/drawing pencil
and stop when we stop pressing. SO from that we know a conditional needs to be added, but based on what?
Processing/p5 (I interchange between both because we'll I'm using both) has a system variable called [`mouseIsPressed`](https://p5js.org/reference/#/p5/mouseIsPressed) which 
is a flag that detects if the mouse is pressed and that's just what we're looking for
``` javascript
  function draw() {
  	if (mouseIsPressed) {
  		strokeWeight(pointWidth);
  		point(mouseX, mouseY);
  	}
  }
```
Now say we created a masterpiece and would liek to share it, well there is a method called [`keyPressed`](https://p5js.org/reference/#/p5/keyPressed) that fires up whenever we
press a key and also saves that key so we can check if we pressed say the `b` key change the background color, or if they pressed `s`
save the file using the [`saveCanvas`](https://p5js.org/reference/#/p5/saveCanvas) method and just like that we have a drawing app! 

![](https://github.com/athoug/art-daily/blob/main/art/day-016/thumbnail.gif)
