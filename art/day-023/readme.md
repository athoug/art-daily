# Day 023 - Translate
So we know 2 things that are fact at this moment. 
1. that when we add a value to the x position it moves to the right
2. the point of origin is at the top left corner at (0, 0);

when we experamented with rotation in the previous day, we saw that it works as if we have a needle placed in the top left corner 
and eaach time we [`rotate`](), it moves the canvas from that point in a clockwise direction. So we can think of it as a pivot point
the place where change takes place. 

Now what if we want to move that point? as in nit have it at point (0, 0) but maybe half the screen? We can actually do that 
with teh [`translate`]() method

I made this visual that hopefully explains it bettwe that I would (as the saying goes, a picture is worth a thousand words. let's
see of that holds)
_note_ the code is using `processing.js` 

![](https://github.com/athoug/art-daily/blob/main/art/day-023/translate.png)

now for todays lesson all we dod is just change the pivot point and we got this 

![](https://github.com/athoug/art-daily/blob/main/art/day-023/result.gif)

## Practice 
so I wanted to have the circles have different colors, and also when we reach the end of the screen (or close enough) to that the 
image reset and also change the rotation degree to get different patterns. I actually like the result. 

![](https://github.com/athoug/art-daily/blob/main/art/day-023/thumbnail.gif)
