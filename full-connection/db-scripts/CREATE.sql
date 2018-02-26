-- (C) 2007-2017 - Juhani V�lim�ki (Toan Khuc, Thu Nghiem)

-- MARIADB = MySQL script

-- (USERNAME AND PASSWORD TO LOGIN TO MYSQL)
-- Username: a1xxxxxx  if mariadb.haaga-helia.fi
-- Password: pppppppp
-- (MAKE SURE YOU ALSO CHANGE TO THE a1xxxxx DATABASE IN MYSQL)
--  --------------------------------------------------------------------------
-- (Run in three parts if using Putty connection with small char buffer)


CREATE TABLE Person 
(
    id              INTEGER         NOT NULL     AUTO_INCREMENT,
    firstName            VARCHAR(255)    NOT NULL,
    lastName            VARCHAR(255)    NOT NULL,

	CONSTRAINT pk_person PRIMARY KEY(id)
) ENGINE=InnoDB;
ALTER TABLE Person AUTO_INCREMENT = 1;

-- --------------------- 1.Tables created in Mother to Child order ---------------------------------------------

CREATE TABLE Category 
(
    id              INTEGER         NOT NULL     AUTO_INCREMENT,
    name            VARCHAR(255)    NOT NULL,

	CONSTRAINT pk_category PRIMARY KEY(id)
) ENGINE=InnoDB;
ALTER TABLE Category AUTO_INCREMENT = 1;

-- --------------------- 2.Industry fields --------------------------------

CREATE TABLE Idea
(
    id              INTEGER         NOT NULL     AUTO_INCREMENT,
    name            VARCHAR(255)    NOT NULL,
    categoryId      INTEGER         NOT NULL,

    CONSTRAINT pk_industryfield PRIMARY KEY(id),
    
    CONSTRAINT ak_idea_name_unique UNIQUE KEY (name),
    
    CONSTRAINT fk_idea_category_categoryid FOREIGN KEY (categoryId)
        REFERENCES Category(id)
        ON DELETE NO ACTION
) ENGINE=InnoDB;
ALTER TABLE Idea AUTO_INCREMENT = 1;   

-- Autoincrement field is NOT given any value in insert (or update) the values are
-- now autoincremented: 201, 202, 203 ... and your test data has to take that into account

-- ON DELETE NO ACTION = Cannot delete mother (Category) if (Ideas) exist
-- The second most popular is ON DELETE CASCADE. E.g. when idea deleted,
-- delete also the comments about it

/* Other datatypes and such */
/* Maybe some old, but anyway how to change from SQL standard datatypes to MySQL/MariaDB */

    -- not MONEY, but:  DECIMAL(19,4)
	-- not SMALLMONEY, but:   DECIMAL(10,4)
	-- not VARCHAR(MAX), but:    VARCHAR(20000) OR TEXT

	/*   examples of correct definitions for MariaDB:

	price           DECIMAL(15,2)   NOT NULL,
    someText        VARCHAR(1000)   NOT NULL,    
   	maxLongVarChar  VARCHAR(20000) 	NOT NULL,
  	enabled         TINYINT         NOT NULL DEFAULT 1,    
	strange_id      INT(11)         NOT NULL AUTO_INCREMENT,
    
	*/