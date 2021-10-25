SELECT id FROM Movies
WHERE director = 'Andrew Staton'; -- AS IDS

DELETE FROM BoxOffice WHERE movie_id IN (2,9);
-- DELETE FROM BoxOffice WHERE movie_id IN IDS

DELETE FROM Movies WHERE director = 'Andrew Staton';

