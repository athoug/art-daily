# Day 2 - Cartesian plane, lines, and loops
So in todays lesson we went over the Cartesian coordinate system. This helped one conceptualize how pizels are drawn on screen 
and how that we start of at the top left corner with x being 0 and y 0 as well (0,0) then as we move horizontaily to the right, 
the x value incresases, and as we move down teh screen the y value increases. 

![image of Cartesian plane](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAC3CAMAAADkUVG/AAAAw1BMVEX////j4+Ps7Oz4+Pj19fXo6OjKysqwsLDg4ODy8vKAzuLQ0NDl5eX39/fb29umpqYAAABxv9PT09Orq6vFxcW4uLibm5tNTU2/v7+Tk5OHh4eAgIBycnJaWlqZmZm2trY6OjpERERlZWVtbW0YGBgkJCSDg4OQ1eW04+7w+ft+z+BVVVUyMjJwcHA+Pj7A5+6j3erP7fVIanKhsbff8viE2Oxhm6pOhpQwT1ZKeIE2WV8gNTkcLTZxuMhNfIlVi5iZy9g8iPUpAAAHy0lEQVR4nO2dfWOaOBjAH0Bewku0KIjiy7TdVNy6dld317vb3X3/T3UBtKX2ScWunS15fn84F/KE8CMkSAoAEARBEARBEARBEESjYS0Aw2QApmkA+OZduvlUVLOJ+hMIhvO5z4bzEbDROC7Tvfk8Pm3NTocx7X4Cb23EIzBY3wOj9cEvFqwTfe3ULESPB2UQhMOu8ToVfX14XvOw/G6l0B6ANxbHz0wHazgskz87MOrVK80Ytbvz4pve76Xtl6/ur8HzxEevtNJLIS6ksL4NkIzSclcLKWlSrzT/cwDroqnYX4QX9ipV/gXYec27RfWFlN4Y7HMYlw3jsziGxD8zC9a8XmHOZQvGVv4tTkG/1F+lxr8AP28EYbEhyQj0cTrzrIvBkGvD+bnhnQtb9np0XrN78D+IllL0P/YIzPfbUiDJN6JoL0a+Zz0GBvc8ZliidSRzMUqDGdYtqzW2oxn0eK4n3PVJ7xFT9B/gT9FlU//IwvQ01WA9Ed+s88G7HX0E+Y6FRNZrJMd6EWJaP1ehN0EkdinDmwrAxcdhVHMjPaug19t+ec947byvtab4pnzsdDof5rF1WAz/MrVR2m083Z5I0tuxLKCLp3dlAfHRAbu6TgeB2KZhGw3IpXT6n+zDR5EnO1ljsqFZdp7ckgZIuilD9uvMPzZAv9v5ZiQ+tLuz1gfb/7HTn2i1xlapFF22jbJ+TPoLVCYlkO0yTdLADVmAeb+pUb7Pom1VDK2aK649Hp9QinQbpVI0PL0qRc+72d2wLA04wLtqKTWkgJW3hx5/OuAAjZNitEVfG5Q/9knK3erybjYMnww4QPOkGFNRc6MbPBVwgOZJAS2vocOfCjhAA6XUCDhA04bkegEHoJaCQFIQSAoCSUEgKQgkBYGkIJAUhGZLqTubvkezpVBLOSLgACQF4ZQ/CKVX8wNJQI0L1w8DnitlwnQUzvF0ZuHpuiML8Ex8gR9KSgp9PN2UBXBHEvDcjjbGpTDOJQs8Sc00WUAokyINOFqKJgk4+ejTatDhQx3tY0gKAklBICkIJAWBpCCQFASSgkCTYQivLmW14is8QNWWsvp65bpn7uLqenfmbtzXX00pq6Wbc+a6WfbttzKtPU53LpSUcrNwd1I23zu/XxVHEdOHg+1yFaVcu1vOsuzsj9vfN27Ztwwm2wwKSrnZOcnO3M3t93//2WSL3Epyd5uIelJWC/e+pZz9+edff//YuFcA0foui3pSlu69lPzjn9vN93/dG7gc2tY2i3JSVllWaSlu5v74sbn9JppKFMe7u/iUk3LtVluKELTZuLfCzk0lj3JSlu7e4VP2ue51JY9qUlaLDJPiustKwPG/fd73hetaUqQtxZdIkQa8uJSB76B4noamawme3wmtSsBZhR+V7/9VArglWUOP4wt4T7JqK8QL4jVvQn4kpQ0Gimni6cDxdIP59yWJs5QMbymVgJaGrxochq+hpUlW7euygGdLwfm5jvYK7Wjd7Gslj2p9Ciyz+6ZSbSlKD8k3LiplUb3epJwUWCBSsgeDj4JSrjOspTy4MKmelMo57b2U6wc5FJQCi30p2fJhBhWlrK6yOynZow4F1JRydwQVUrK9YwdUlQI3y8X28Fl8fTz5o+xk2Op6ufxv+fUGmw9TtKWUyGqmtBSaYEcgKQgkBYGkIJAUBJKCQH/JhPD6UvzmSKHDB+ENX7iOjRaKpgVoehAyPMB0jgzQuSSA63gA43h6yzElAc+932eimxj5nWH4gh6abJo8lARYPh6geZIAz8EDfA9P10MuCTj5TVAvd/iofBMUDckIJAWBhmQEkoJAUhBICgJJQSApCCQFgaQgkBQEkoJAUhBICgJJQSApCCQFgaQgkBQEkoLQpMuR0vf7vNzV/GMnw/QXvwnK9FHCUHxoj9PNnoMHcA9N1vIApBzfd/AA37c4nu5YkgCPI2sQKc6znwiIzxAGvi+b8JNM0+myGUIumSFk0gDZDKEsQHvpGcK32KcoPBn2Dkaf/ZqTFABr/z3CJMW3rf3jWHUpehQ9LlVxKRb6DkeVpYTpFH9nocJS2GBY1sDafze5slJYEiXd/AvvevvLVJXidbnQIbbf7lFHW+KUrcNpJTa2/SpK0adJWZJt41upohS/3GZ/MpFkUFFKgR71yo4WW6amFCM/awvpV3KVsJuftdGlg2o53fKt9SQFKYekILzJy5EKS6GWgvCGb4I69jlvBg+w1MBgsqewceyxbaIQ5qDZAwN7zlsQBLKA4jlvSKXyKj1TysDUMHzH8X18AZpf00QAmh8PyPPiASJdky5Aka9B0oJqtBRiH5KCUEgJt5eYWlGUiH6URTqbRomsW2s+uZTBaJQW/9EHg89DmPYn3P807NgnrtrpEFL0S53Ndl3SmkO/GHRZXzYmNx8hRbtswXj7iPJ2Cs7F+RcxlI0U7mwKKQGMy3mOYMyBf+DdFHSFG0ouhc14ODOKvwbi4wD0mZmk0B6dumYnJO9orfE4gnn+3pA4P2bi+dyB1DoU2WCKIbnFgI3z7tUofqawQBxIp63WadmdvOn45KmKGIbVfvTnOqpjdT5eXAwO51OKoCN45sPlm8ug0+mfug5vDq/TiU9dhzcHW1/QsPOIdKbw6byM9vmpa/AG8WQT7CojnZggCIIgCIIgCIIgiEbzP/OvvvvE6TDyAAAAAElFTkSuQmCC)
So all in all every pixel on the screen can be plotted by having the x and y value of it's location on the plane. 
Now that makes us understand better what the arguments we passed to `point` are. As well as understand why we passed 4 values 
to `line` since a line is made of 2 points and each point is made of 2 values, hene the 4 values.

### lines and random
now it's all fun creaing a line such that 
```
  line(0,0, 99, 99);
```
but what if we want it to be drawn at random positions? Well luckly there's a method that helps in just that [`random()`](https://p5js.org/reference/#/p5/random)
with `random` added to the code 

```
  line(random(100),random(100),random(100),random(100)); 
```
it made it a bit more intresting, but what if we wanted it to change position from time to time? That's where we can use loops

### draw function 
in animation, the way they animate the charachters movement, is by having different frames of the charachter (with changing 
position and movment) played after one another, that gives us teh illustion of moments when in reality they are images
the same concept is adopted here.

Processing comes with a method called [`draw`](https://p5js.org/reference/#/p5/draw) which loops over the code inside it over and 
over again. so if we add our code inside of a draw function then 
```
  function draw() {
  // draw() loops forever, until stopped
  line(random(100),random(100),random(100),random(100)); 
  }
```
we'll have a bunch of lines drawn over and over again untill our whoel canvas turns black. so we need a way to have the canvas reset

### background
with the [`background`]() method we can reset the canvas (as well as chose a background color) so when we add background to our 
`draw` function we get this illustion that the line is moving. 
```
  function draw() {
    // draw() loops forever, until stopped
    // background() erases the screen with a color
    background(255, 204, 0);
    line(random(100),random(100),random(100),random(100)); 
  }
```

This was the summary of todays lesson. Now it's time for me to put that in practice.

## Practice
