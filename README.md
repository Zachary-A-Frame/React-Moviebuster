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
1. (First priority - Major Bug) Our patch request is currently receiving a 200 https code, however, it is not updating our players score on the backend. To be clear, if you enter a correct guess currently you will successfully initiate a patch request, however, nothing happens.
2. (Second priority - Todo) Currently, you must refresh the page to view further movies. This is a TODO, not a bug. Just as with the original app, we will offer the player a button that will update our Movie context to contain a new film after they finish their current attempt and are taken to the "answer" page.
3. (Third priority - Todo) A correct answer / incorrect answer alert
4. (Fourth priority - Todo) Styling
5. (Fifth priority - Todo) Any new features should happen after the above todos/bugs have been completed.
