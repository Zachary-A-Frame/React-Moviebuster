# React-Moviebuster (Alpha)
### Getting started
Git clone the project into a repository of your choice. Seed your data, run the backend server, and then start your front end.
> psql -U postgres < moviebuster.sql

###
from the root directory
> node server.js

###
from the moviebuster folder
> npm start

### Known Major Bugs and Todos
There are a few minor bugs, I'll be ignoring those for now.
1. ~~(First priority - Major Bug) Our patch request is currently receiving a 200 https code, however, it is not updating our players score on the backend. To be clear, if you enter a correct guess currently you will successfully initiate a patch request, however, nothing happens.~~
2. ~~(Second priority - Todo) Currently, you must refresh the page to view further movies. This is a TODO, not a bug. Just as with the original app, we will offer the player a button that will update our Movie context to contain a new film after they finish their current attempt and are taken to the "answer" page.~~
3. ~~(Third priority - Todo) A correct answer / incorrect answer alert~~
4. ~~(Fourth priority - Todo) Basic Styling~~
5. ~~(Fifth priority - Todo) Any new features should happen after the above todos/bugs have been completed. ~~
6. Scoreboard - When you click on your score at the top I'd like it to navigate the player to a leaderboard. Difficulty: 3/10.
7. Create a player profile - This can range from very simple to fairly robust. The concept here would be maintaining and displaying data on our players. We could maintain an array of movies the player has attempted to answer questions on. On the DB side we'd have a relationship built so that when a player guesses we can get access to what their guess was and whether they were right or wrong. It would be interesting to graph that data for the player, maybe even do a break down by genre. Difficulty: 2/10 -> 7/10
8. Create a global profile - the same as #7, but create a class for our global playerbase and simply track correctness, possibly doing the same thing as above, creating a relationship with our movie table so we can track which movies are most often incorrectly guessed. Difficulty: 7/10
9. Advanced styling - I have some ideas, but as styling is not a strong point of mine I would want to do some more research on how I'd like the site to look overall before committing. I don't think I'd commit to something like Material UI or Tailwind, although I am already familiar with both. Difficulty: 4/10
