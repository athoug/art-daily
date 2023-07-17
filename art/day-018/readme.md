# Day 018 - While loops
we experienced conditional code `if` and `else` blocks that controll if a code would run or not, now the question is, what if 
I wanted to repeat something over and over say draw 50 circles. 
I don't want to deplicat ethe code over and over again 50 times 

![](https://assets1.cbsnewsstatic.com/i/cbslocal/wp-content/uploads/sites/31325972/2014/01/cg-bartgetsanf02.png)

I want a way to write it once and it repeats, and that's where the while code block comes to the rescuse 
there are 3 parts for a while to work 
1. a value that holds the current itteration (as in the start point, it's tipically writen as `i`)
2. a controlling condition that evaluates to `true` or `false` (if it's true run the code again, otherwise skip the code)
3. updating the iteration variable (this point is very important because we don't want the loop to go on forever)

so here's an exmple code of what a while loop looks like taking into account the scenario stated earlier

``` java
float i = 0;
while (i < 100) {
  ellipse(100 , 100 , 100 , 100);
  i += 1;
}
```

now this won't do much since it will draw the circles on top of each other becaus ethey're not changing location so a good
way is to update those value. one way is to use this

``` java
  ellipse(100 + i* 1.5, 100 + i * 1.5, 100 + i, 100 - i);
```

Here's how the result looks like

![](https://github.com/athoug/art-daily/blob/main/art/day-018/loop-result.png)

## Practice
so my idea was I wanted to have the size of the circles to change based on the  mouse location
- if the `mouseX` is less that 1/2 the width decrease the size otherwise increase
- if `mouseY` is less that 1/2 the height decrease the size otherwise increase

you get the point, but honestly, I don't really know what I did, it's just a whirlwind. 
I didn't do a good job documenting because i'm rushing but damn... what is this

![](https://github.com/athoug/art-daily/blob/main/art/day-018/thumbnail.gif)
