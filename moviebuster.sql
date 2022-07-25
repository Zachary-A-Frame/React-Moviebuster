\echo 'Delete and recreate react_moviebuster db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE react_moviebuster;
CREATE DATABASE react_moviebuster;
\connect react_moviebuster;

\i moviebuster-schema.sql;

-- \copy movies(id,year,imdb,title,plot,poster,actual_score)
-- FROM 'movies.csv'
-- DELIMITER ','
-- CSV HEADER;
\copy movies FROM 'movies.csv' csv header;
\copy users FROM 'users.csv' csv header;

-- \i moviebuster-seed.sql

-- \echo 'Delete and recreate react_moviebuster db?'
-- \prompt 'Return for yes or control-C to cancel > ' foo

-- DROP DATABASE jobly_test;
-- CREATE DATABASE jobly_test;
-- \connect jobly_test

-- \i moviebuster-schema.sql
