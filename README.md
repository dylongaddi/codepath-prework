# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: https://rainbow-recall.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [✓] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [✓] "Start" button toggles between "Start" and "Stop" when clicked. 
* [✓] Game buttons each light up and play a sound when clicked. 
* [✓] Computer plays back sequence of clues including sound and visual cue for each button
* [✓] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [✓] User wins the game after guessing a complete pattern
* [✓] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [✓] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [✓] Buttons use a pitch (frequency) other than the ones in the tutorial
* [✓] More than 4 functional game buttons
* [✓] Playback speeds up on each turn
* [✓] Computer picks a different pattern each time the game is played
* [✓] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] Mistakes/Lives are kept track of and displayed. Mistakes create an alert box.
- [ ] Streak/Progress is kept track of and displayed.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- Google color picker
- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
- The main challenge I encountered was first wiring the game logic for the "guess" function. I first looked at the flowchart given and transposed it into pseudocode. I then used console.log to display the total for guesses and progress to try to further understand the issure. After having it mostly work, I decided to take around an hour break from trying to debug it to see if I could come back with a better perspective. I then took a peek at the provided solution and figured out the problem was a simple flaw in my logic. I was accessing the index of pattern with progress rather than with guesses. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- The questions I have revolve around the backend as well as front end frameworks, both of which I would love to learn more about. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- I would probably attempt to refactor the way the random pattern is created so that the user could input the length of how long the pattern is. Perhaps I would try to  implement easy, medium, and hard difficulties that scale the length of the pattern as well as the time in between each clue. I would love to spruce up the design a little bit and try making a more distinct theme with the buttons and audio, and maybe I would try to make a dark mode that flips all the colors of the buttons, text, and website in general. 



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
