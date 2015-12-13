DROP DATABASE IF EXISTS SkateMap;
CREATE DATABASE IF NOT EXISTS SkateMap;
USE SkateMap;
CREATE TABLE Locations(
  locationId INT,
  position varchar(255) NOT NULL,
  created DATETIME NOT NULL,
  updated DATETIME NOT NULL,
  PRIMARY KEY(locationId)
);
CREATE TABLE Comments(
  commentId INT,
  location INT NOT NULL,
  description TEXT  NOT NULL,
  created DATETIME NOT NULL,
  rate SMALLINT  NOT NULL,
  PRIMARY KEY (commentId),
  FOREIGN KEY  (location) REFERENCES Locations(locationId)
);

INSERT INTO Locations(locationId,position,created,updated) VALUES(1,"macba",NOW(),NOW());
INSERT INTO Locations(locationId,position,created,updated) VALUES(2,"univesitad",NOW(),NOW());
INSERT INTO Locations(locationId,position,created,updated) VALUES(3,"maravella",NOW(),NOW());

INSERT INTO Comments (commentId,location,description,created,rate) VALUES(1,1,"Real cool place!",NOW(),5);
INSERT INTO Comments (commentId,location,description,created,rate) VALUES(2,1,"Gne.. not that bad",NOW(),2);
INSERT INTO Comments (commentId,location,description,created,rate) VALUES(3,1,"Hmm, could be better",NOW(),5);

INSERT INTO Comments (commentId,location,description,created,rate) VALUES(4,2,"I hate this place",NOW(),3);
INSERT INTO Comments (commentId,location,description,created,rate) VALUES(5,2,"They should destroy this spot",NOW(),1);
INSERT INTO Comments (commentId,location,description,created,rate) VALUES(6,3,"I go there everyday",NOW(),5);
INSERT INTO Comments (commentId,location,description,created,rate) VALUES(7,3,"It's really fun",NOW(),3);


SELECT position,location,avg(rate) avg_rate
	FROM Comments JOIN Locations ON location=locationId
	GROUP BY location
    ORDER BY avg_rate DESC;
