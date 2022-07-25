CREATE TABLE movies (
  id text PRIMARY KEY,
  year INTEGER,
  imdb VARCHAR(10) UNIQUE NOT NULL ,
  title TEXT NOT NULL,
  plot TEXT NOT NULL,
  poster VARCHAR(1500),
  actual_score INTEGER
);

CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  email TEXT NOT NULL,
  score INTEGER
);

