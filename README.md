# React-Moviebuster (Alpha)
## Getting started
Git clone the project into a repository of your choice. Seed your data, run the backend server, and then start your front end.
> psql -U postgres < moviebuster.sql

###
from the root directory
> node server.js

###
from the moviebuster folder
> npm start

## How To Demo
After following the above steps, sign up for an account. You will be immediately allowed to begin playing the game. The game is simple. You'll be given the description of a movie. In the form field below, type in what YOU think critics on Rotten Tomatoe's aggregate score came to. For example, if you're given the description to Blade Runner, you could guess 90 and be correct. The actual answer is 89, however, you'll be awarded points if you're within ten percentage points of the actual answer.

## Technologies Used
1. This project, as the name implies, is a React application on the front end. I chose React to gain practice with a leading front end framework. Given more time, I may have attempted to use NextJS instead, but this was the correct decision given how much time I had to commit to learning as I developed.
2. NodeJS and Express make up our backend. NodeJS pairs well with React, as they're both JS.
3. For styling, we used bootstrap and react-bootstrap.
4. To abstract some of our validation away, we used React-Hook-Form to handle our form data.
5. For routing we used React-Router-Dom, as it's still the gold standard for client side React routing.

### Known Major Bugs and Todos
There are a few minor bugs, I'll be ignoring those for now.
1. ~~(First priority - Major Bug) Our patch request is currently receiving a 200 https code, however, it is not updating our players score on the backend. To be clear, if you enter a correct guess currently you will successfully initiate a patch request, however, nothing happens.~~
2. ~~(Second priority - Todo) Currently, you must refresh the page to view further movies. This is a TODO, not a bug. Just as with the original app, we will offer the player a button that will update our Movie context to contain a new film after they finish their current attempt and are taken to the "answer" page.~~
3. ~~(Third priority - Todo) A correct answer / incorrect answer alert~~
4. ~~(Fourth priority - Todo) Basic Styling~~
5. ~~(Fifth priority - Todo) Any new features should happen after the above todos/bugs have been completed. ~~
6. Create a time limit. When playing, there's currently nothing stopping you from just typing in the description into another tab on your PC. I think a minimal time limit before moving on would be wise. Something like 15 seconds or so, maybe a little more or less, but I'd have to get some data to make a meaningful decision regarding time in that regard. Difficulty: 4/10
7. Dynamic Points Assignment. I was thinking of offering up to ten points for a perfect guess, and then one point subtraced for how far you were from correct. For instance if you guessed 90 and the answer was 89, you'd get 9 points. If you guessed 95 and the answer was 89, you'd get 4 points. Difficulty: 2/10.
8. Scoreboard - When you click on your score at the top I'd like it to navigate the player to a leaderboard. Difficulty: 3/10.
9. Create a player profile - This can range from very simple to fairly robust. The concept here would be maintaining and displaying data on our players. We could maintain an array of movies the player has attempted to answer questions on. On the DB side we'd have a relationship built so that when a player guesses we can get access to what their guess was and whether they were right or wrong. It would be interesting to graph that data for the player, maybe even do a break down by genre. Difficulty: 2/10 -> 7/10
10. Create a global profile - the same as #7, but create a class for our global playerbase and simply track correctness, possibly doing the same thing as above, creating a relationship with our movie table so we can track which movies are most often incorrectly guessed. Difficulty: 7/10
11. Advanced styling - I have some ideas, but as styling is not a strong point of mine I would want to do some more research on how I'd like the site to look overall before committing. I don't think I'd commit to something like Material UI or Tailwind as potential frameworks, although I am already familiar with both. Difficulty: 4/10
