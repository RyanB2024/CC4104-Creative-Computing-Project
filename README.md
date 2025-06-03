# CC4104-Creative-Computing p5.js Project
## Due June 2 2025
By Ryan Blestowe

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Experiment 1
#### An Alternative Visual Way to Represent a Realtime Clock
[Real-time Clock](/project-1/Project1-sketch.js)

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

The starting inspiration point for this landscape generator is that I looked up landscape generators on the internet. One example I came across was one called “Landscape Generator 1” by Jon Froehlich. What I liked about this example is the generation of a mountain range in the background that changes heights. Another aspect I enjoy about this example is the moon and sun in the sky. Although I didn’t use any of Jon Froehlich's code, I was inspired by elements of his design that I took for my project.
The code techniques I used for my landscape generator include creating const variables that would be assigned random values. For example, a variable for day or night generation would decide if the scene would be taking place during the day or nighttime, then change the colors of the objects based on that scheme, like making the circle in the sky a sun or moon. Another technique I used was making a random width and height value for the mountain to influence how it will look. The last technique I used in my landscape generator is the random generator for the plants and buildings. For the plants, the distances between them are random x-values between 60–120 pixels, spacing them apart, but not equally, to feel more organic. The buildings are all equally spaced 100 pixels apart, to be more uniform and building-like.
What worked well was changing the color of all objects depending on whether it is day or night. That feature works well and does a lot to demonstrate the ability of the program to generate different outcomes based on random values. What didn’t work well is that I wanted the lakes to be less like random ellipses; I wanted to find a way to connect them all smoothly. I was unable to figure out how to do this. If I were to do this project again, I would look more into this and figure out how to connect the ellipse puddles with lines to fill in the areas between the puddles using variables to make algorithms that could automatically fill those bits of empty area. I would go about this by learning more about assigning variables to randomly generated shapes, then develop the algorithm that would look and work the best.
Another part of the project I would want to work more on if I did it again is the mountain range in the background. I would want to make it smoother and less jagged, with more details like dips and peaks. I could probably go about doing this by studying how Jon Froehlich did it in his landscape generator, as his mountain range was smoother than mine is in my project.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Experiment 3
#### An autonomous pattern generator that will create a rich visual effect that is different each time it is rune
[Patter Generator](https://editor.p5js.org/RyanB2024/sketches/KTnNE3Lgz)

<img src="Project 3 - Photo1.png" alt="Alt text" width="300"/>
<img src="Project 3 - Photo2.png" alt="Alt text" width="300"/>
<img src="Project 3 - Photo3.png" alt="Alt text" width="300"/>

The starting point for my autonomous pattern generator was looking at Tyler Hobbs’ Fidenza generative art piece for inspiration. Through inspecting the piece, I took aspects of it and included them in my artwork. For example, the piece flows towards and around certain parts of the canvas. This turbulence of the canvas inspired how I made mine. For my turbulence, I added specific variables that add random attracting and repelling points across the canvas, and using angle averagers, it would influence how the piece of work would flow on the canvas.
The coding techniques that I used in this project began with creating a random palette variable that would include four random colors each time from the preselected 25 base colors. This allows each piece to look individually different and separate from each other, instead of looking similar with the same colors every time. It was also important not to use too many of the 25 colors for the same reason, since it would average out and every generation would look the same with a blend of colors.
Another coding technique I used in this project was creating a flow field using Perlin noise, allowing me to create smooth and continuous line segments in flowing patterns. This was achieved by making the grid out of the variables of columns, rows, and scale, which all influence different aspects of the grid. The columns and rows control the number of columns and rows that are created, and the scale decides the size of the grid. Zoff works inside the noise to keep the pattern stable, and TWO_PI is used to get the angle radian. This allowed the art to have a flowing pattern where the lines were able to flow around and towards certain areas of turbulence on the field area.
The last coding technique I used was creating focal points that either attract or repel the lines. First, a position is given to the focal point at a random width and height, where the focal point is placed. Then, an attract attribute, which is a random true or false statement, determines if the point will attract (true) or repulse (false). Each cell in the grid then calculates the influence the focal point has on it and comes out with a solution.
What worked well was how the project turned out, with every new piece looking visually unique and different with curves and colors. What didn’t work well, and what I would do differently next time, is figuring out how I can optimize the code so that it can generate experiments quicker. Currently, the code runs slowly and takes a while to generate an image because of all the lines it has to create. I would like to find a way to keep the piece looking the same but generate it faster. I would go about doing this by testing and experimenting with the code, such as adjusting the number of lines or reducing the quality of other assets so that computing power can be used more efficiently.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
