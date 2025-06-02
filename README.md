# CC4104-Creative-Computing p5.js Project
## Due June 2 2025
By Ryan Blestowe

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Experiment 1
#### An Alternative Visual Way to Represent a Realtime Clock
[Real-time Clock](https://editor.p5js.org/RyanB2024/sketches/xJCJdTdr4)

<img src="Project 1 - Photo 1.png" alt="Alt text" width="300"/>
<img src="Project 1 - Photo 2.png" alt="Alt text" width="300"/>

The inspiration for this visual representation of a real-time clock is when water drips off of a stalactite, leading me to wonder how I could use water droplets to represent time. Water droplets led me to the idea of a water dropper filling up a beaker, with a drop falling every second, filling the beaker up every minute. Then I continued with that idea to make a whole chemistry setup to be a clock.
The code techniques I used for my digital representation of a clock include using real-time functions to get the real-time, such as now.getSeconds();, now.getMinutes();, and now.getHours();. These functions allowed real-time values to be assigned to the clock in the program. Another coding technique I used in this project is particles used for the water droplet and adding a positive velocity to it, causing it to fall. The droplet was also coded in a way that one would drop every second, but it would be spliced (removed) after it passed the floor Y-level of the beaker.
The last technique was using maps to map the height or width of one of the bars to the amount of time, equally allowing them to fill up an equal amount for each second, minute, or hour. One problem was doing the minute tuning of the movement of water, like after every hour the horizontal bar would empty and so would the pipe connecting the beaker and the horizontal pipe. So I had to assign when it would fill up after a minute, and I had to make an if-else statement.
Another time I did this was when the water changed from the horizontal bar to the boiling flask, where I had to make an if-else statement but add that the boiling flask will not fill until (min >= 59 && sec >= 45). Another problem I ran into was deciding if I wanted to make the smoke particles rather than a map filled grey, but I couldn’t figure out a way to keep the particles in a glass container the way I wanted to.
If I were to do this project again, I would work harder to find a way to complete the project with the smoke being particles collected in a lightbulb-shaped glass container, all interacting with each other. I would achieve this by learning more about particle physics and eithier learn how to simulate it with particles or make it look like the particles are simulating interacting with eachother.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Experiment 2
#### A city or landscape generator, with at least 3 distinct types of building or land
[Landscape Generator](https://editor.p5js.org/RyanB2024/sketches/L9X75r_a8)

<img src="Project 2 - Day.png" alt="Alt text" width="300"/>
<img src="Project 2 - Night.png" alt="Alt text" width="300"/>

Example text

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Experiment 3
#### An autonomous pattern generator that will create a rich visual effect that is different each time it is rune
[Patter Generator](https://editor.p5js.org/RyanB2024/sketches/KTnNE3Lgz)

<img src="Project 3 - Photo1.png" alt="Alt text" width="300"/>
<img src="Project 3 - Photo2.png" alt="Alt text" width="300"/>
<img src="Project 3 - Photo3.png" alt="Alt text" width="300"/>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
