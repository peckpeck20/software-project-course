-- (C) 2007-2017 - Juhani V�lim�ki (Toan Khuc, Thu Nghiem)
-- (USERNAME AND PASSWORD TO LOGIN TO MYSQL)
-- Username: a1xxxxxx  if mariadb.haaga-helia.fi
-- Password: pppppppp
-- (MAKE SURE YOU ALSO CHANGE TO THE a1xxxxx DATABASE IN MYSQL)

-- Traditional DELETE statements in the beginning are not sufficient, reason:
-- They would not reset the AUTOINCREMENT start values 101,1001 etc.
-- Thus you'll need to run first the scripts that do 
-- DROP TABLES, CREATE TABLE and ALTER TABLES for the key start values
-- Easier solution for our case. 

-- Notice that autoincrement columns aren't given NO value at all.

-- Run also very long scripts in parts if via Putty connection!

-- --------------------- 1.Category ------------------------------------------

INSERT INTO Category 
(name) 
	VALUES
("Nioh is an awesome game to play."),
("Pencil is a great tool for writing."),
("Potatoes are a very nice vegetable to eat."),
("Tomatoes are red versions of potatoes.");


-- --------------------- 4.Idea ----------------------------------------------

INSERT INTO Idea
(name, categoryId) 
	VALUES
("One", 1),
("Two", 1),
("Three", 1),
("Four", 3),
("Ei", 3),
("Joo", 4);


INSERT INTO Person
(firstName, lastName)
	VALUES
	("first1", "last1"),
	("first2", "last2"),
	("first3", "last3"),
	("first4", "last4");


/* INSERT INTO Class
(level) 
	VALUES
(1),
(2);


INSERT INTO FormTerm
(ideaId, memberId) 
	VALUES
(101, 1001),
(101, 1007),
(102, 1002); */

-- --------------------- 5.Actual Form Submissions ---------------------------

--  -------------------- *** END *** -----------------------------------------

	