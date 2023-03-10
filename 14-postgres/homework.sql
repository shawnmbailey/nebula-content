-- 1
SELECT yr, subject, winner
  FROM nobel
 WHERE yr = 1950

 -- 2
 SELECT winner
  FROM nobel
 WHERE yr = 1962
   AND subject = 'literature'

   -- 3
   SELECT yr, subject
  FROM nobel
 WHERE winner = 'ALbert Einstein';

 -- 4
 SELECT winner
FROM nobel
WHERE subject = 'Peace' AND yr >= 2000;

-- 5
SELECT yr,subject,winner
FROM nobel
WHERE subject = 'literature' AND yr BETWEEN 1980 AND 1989

-- 6
SELECT * 
FROM nobel
WHERE winner IN ('Theodore Roosevelt', 'Woodrow Wilson' ,'Jimmy Carter' , 'Barack Obama');

-- 7
SELECT winner
FROM nobel
WHERE winner LIKE 'John%';

-- 8
select yr,subject,winner
FROM nobel
WHERE (subject = 'Physics' AND yr = 1980) OR (subject = 'Chemistry' AND yr = 1984);

-- 9
SELECT yr,subject,winner 
FROM nobel 
WHERE yr = 1980 AND subject NOT IN ('chemistry', 'medicine');

-- 10
SELECT yr , subject, winner
FROM nobel 
WHERE ((subject = 'medicine' AND yr < 1910) OR (subject = 'literature' and yr >= 2004))
ORDER BY yr;

-- 11
SELECT *
FROM nobel
WHERE winner LIKE '%Peter Grünberg%';

-- 12
SELECT * 
FROM nobel 
WHERE winner = 'Eugene O''Neill';

-- 13
SELECT winner , yr , subject 
FROM nobel 
WHERE winner LIKE 'Sir%'
ORDER BY yr DESC , winner 

-- 14
SELECT winner, subject
FROM nobel
WHERE yr = 1984
ORDER BY 
    CASE 
        WHEN subject IN ('Chemistry', 'Physics') THEN 2
        ELSE 1
    END,
    subject,
    winner;