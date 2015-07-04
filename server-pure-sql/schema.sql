<<<<<<< HEAD
DROP DATABASE IF EXISTS chat;
=======
>>>>>>> orm
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
<<<<<<< HEAD
  username varchar(30), message varchar(100), roomname varchar(15)
);

/* Create other tables and define schemas for them here! */

=======
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200) NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL.
  PRIMARY KEY (ID)
);
>>>>>>> orm



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

