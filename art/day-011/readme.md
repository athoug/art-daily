# Day 011 - Things happening sometimes

In todays lesson we get introduced to `print` to help us see what is happening. In other words debugging. you can see me using it in [day 9]() it's your friend when your program isn't behaving teh way you want it to, or the results aren't as expected. So remember, `print`, `console.log` or whichever log you use in your preferred programming language is your friend.

Now the lesson builds on yesterdays sketch (now it's 3 days on the same sketch) but this time we wanted to change an event sometimes. hence we chose to use the size. It introduced probability but very surface level. in later classes I believe it will be much expanded but for now, just know when we check a condition the smaller the changes of it occurring is based on how little options you have. Meaning say we generate a number randomly between 0 and 10

```java
  random_num = random(10)
```

so when we couple it with a conditional (as in an [`if`]() statement or an expression that's translate to a boolean value `true` or `false`) it happens sometimes. And the degree of it happening is in our hands let's take an example of

```java

  if (random_num > 2) {
    print('yaaay, i have been executed');
  }

```

the chances of seeing that print method is hight as in 80%, why? because the possibility of options are high as in there are a range of 3-10 possible values that can make this condition pass. SO the pool of possibilities is hight, now to make it less as in 50% we increase the value from 2 to 5

```java

  if (random_num > 5) {
    print('yaaay, i have been executed');
  }

```

so the lower the options the less possibility it might happen.

Now here's the way we used in in todays class in regards to the ball size

```java
float show_circle_x = 0;
float fast_circle_x = 0;
float slow_circle_size = 50;

void setup() {
   size(400, 400);
   noStroke();
}

void draw() {
  background(#1bb1f5);
  float slow_circle_size = 50;

  if (random(10) > 9.5) {
    slow_circle_size = 60;
  }

  fill(#c1ff3e);
  ellipse(show_circle_x, 50, slow_circle_size, slow_circle_size);
  show_circle_x += 1;

  fill(#ff4800);
  ellipse(fast_circle_x, 50, 50, 50);
  fast_circle_x += 5;

  if (fast_circle_x > width) {
    fast_circle_x = 0;
  }

  if (show_circle_x > width) {
    show_circle_x = 0;
  }
}
```

Result

![]()

## Practice
