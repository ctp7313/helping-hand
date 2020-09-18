DROP DATABASE IF EXISTS services_db;
CREATE DATABASE services_db;

USE services_db;

CREATE TABLE shelter (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(200) NOT NULL,
    phonenumber INTEGER(15) NOT NULL,
    website VARCHAR(200) NULL,
    serving_male BOOLEAN DEFAULT false,
    serving_female BOOLEAN DEFAULT false,
    serving_family BOOLEAN DEFAULT false,
    longer_term_stay BOOLEAN DEFAULT false,
    immediate_stay BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
CREATE TABLE health (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(200) NOT NULL,
    phonenumber INTEGER(15) NOT NULL,
    website VARCHAR(200) NULL,
    serving_youth BOOLEAN DEFAULT false,
    serving_adult BOOLEAN DEFAULT false,
    serving_senior BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
CREATE TABLE daily_care (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(200) NOT NULL,
    hours_open INTEGER(15) NOT NULL,
    phonenumber INTEGER(15) NOT NULL,
    website VARCHAR(200) NULL,
    PRIMARY KEY (id)
);
CREATE TABLE food (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(200) NOT NULL,
    hours_open INTEGER(15) NOT NULL,
    phonenumber INTEGER(15) NOT NULL,
    website VARCHAR(200) NULL,
    serving_breakfast BOOLEAN DEFAULT false,
    serving_lunch BOOLEAN DEFAULT false,
    serving_dinner BOOLEAN DEFAULT false,
    serving_under18 BOOLEAN DEFAULT false,
    serving_18to25 BOOLEAN DEFAULT false,
    serving_26to40 BOOLEAN DEFAULT false,
    serving_41to54 BOOLEAN DEFAULT false,
    serving_55to64 BOOLEAN DEFAULT false,
    serving_64up BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

Error Code: 1075. Incorrect table definition; there can be only one auto column and it must be defined as a key

0 row(s) returned
