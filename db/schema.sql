DROP DATABASE IF EXISTS services_db;

CREATE database services_db;

USE services_db;

CREATE TABLE shelter (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    address VARCHAR(30) NOT NULL,
    hours VARCHAR (20) NOT NULL,
    phone_num INT NULL,
    website VARCHAR(30) NULL,
    type ??,
    gender BOOLEAN,
    PRIMARY KEY(id)
);

CREATE TABLE health (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    address VARCHAR(30) NOT NULL,
    hours VARCHAR (20) NOT NULL,
    phone_num INT NULL,
    website VARCHAR(30) NULL,
    gender BOOLEAN,
    PRIMARY KEY(id)
);

CREATE TABLE daily_care (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    address VARCHAR(30) NOT NULL,
    hours VARCHAR (20) NOT NULL,
    website VARCHAR(30) NULL,
    PRIMARY KEY(id)
);

CREATE TABLE food (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    address VARCHAR(30) NOT NULL,
    hours VARCHAR (20) NOT NULL,
    phone_num INT NULL,
    website VARCHAR(30) NULL,
    type ???,
    age ??,
    type VARCHAR(20)
);
